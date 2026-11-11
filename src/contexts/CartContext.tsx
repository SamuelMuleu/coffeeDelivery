import { ReactNode, createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { Coffee, DELIVERY_FEE, coffees } from "../data/coffees";
import type { Address, Order, PaymentMethod } from "../data/order";

interface CartItem {
  coffeeId: number;
  quantity: number;
}

interface State {
  items: CartItem[];
  lastOrder: Order | null;
}

type Action =
  | { type: "add"; coffeeId: number; quantity: number }
  | { type: "setQuantity"; coffeeId: number; quantity: number }
  | { type: "remove"; coffeeId: number }
  | { type: "checkout"; order: Order };

const MAX_QUANTITY = 99;
const STORAGE_KEY = "coffee-delivery:state:v1";

function clamp(n: number) {
  return Math.max(1, Math.min(MAX_QUANTITY, Math.floor(n)));
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": {
      const existing = state.items.find((i) => i.coffeeId === action.coffeeId);
      const items = existing
        ? state.items.map((i) =>
            i.coffeeId === action.coffeeId ? { ...i, quantity: clamp(i.quantity + action.quantity) } : i
          )
        : [...state.items, { coffeeId: action.coffeeId, quantity: clamp(action.quantity) }];
      return { ...state, items };
    }
    case "setQuantity":
      return {
        ...state,
        items: state.items.map((i) => (i.coffeeId === action.coffeeId ? { ...i, quantity: clamp(action.quantity) } : i)),
      };
    case "remove":
      return { ...state, items: state.items.filter((i) => i.coffeeId !== action.coffeeId) };
    case "checkout":
      return { items: [], lastOrder: action.order };
  }
}

function loadState(): State {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as State;
      // Drop items for coffees that no longer exist
      parsed.items = parsed.items.filter((i) => coffees.some((c) => c.id === i.coffeeId));
      return parsed;
    }
  } catch {
    // ignore corrupted or unavailable storage
  }
  return { items: [], lastOrder: null };
}

interface CartContextValue {
  items: (CartItem & { coffee: Coffee })[];
  itemsCount: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  lastOrder: Order | null;
  addItem: (coffeeId: number, quantity: number) => void;
  setQuantity: (coffeeId: number, quantity: number) => void;
  removeItem: (coffeeId: number) => void;
  checkout: (address: Address, payment: PaymentMethod) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadState);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // storage may be unavailable (private mode); the cart still works in memory
    }
  }, [state]);

  const value = useMemo<CartContextValue>(() => {
    const items = state.items.map((i) => ({ ...i, coffee: coffees.find((c) => c.id === i.coffeeId)! }));
    const subtotal = items.reduce((sum, i) => sum + i.coffee.price * i.quantity, 0);
    const deliveryFee = items.length ? DELIVERY_FEE : 0;
    const total = subtotal + deliveryFee;
    return {
      items,
      itemsCount: items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal,
      deliveryFee,
      total,
      lastOrder: state.lastOrder,
      addItem: (coffeeId, quantity) => dispatch({ type: "add", coffeeId, quantity }),
      setQuantity: (coffeeId, quantity) => dispatch({ type: "setQuantity", coffeeId, quantity }),
      removeItem: (coffeeId) => dispatch({ type: "remove", coffeeId }),
      checkout: (address, payment) => dispatch({ type: "checkout", order: { address, payment, total } }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de <CartProvider>");
  return ctx;
}
