import { ReactNode, useState, createContext, FC } from "react";

interface Product {
  id: number;
  name: string;
  count: number;
  price: number;
  image: string;
}

interface Order {
  product: Product;
  quantity: number;
}

interface OrderContextProps {
  orders: Order[];
  addOrder: (order: Order) => void;
  removeOrder: (order: number) => void;
}

interface OrderProviderProps {
  children: ReactNode;
}

const defaultContextValue: OrderContextProps = {
  orders: [],
  addOrder: () => {},
  removeOrder: () => {},
};

export const OrderContext =
  createContext<OrderContextProps>(defaultContextValue);

export const OrderProvider: FC<OrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {
    if (order.quantity <= 0) {
      return;
    }

    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const removeOrder = (orderId: number) => {
    localStorage.removeItem("orders.lenght");
    setOrders((prevOrders) => {
      const updatedOrders = prevOrders.filter(
 
        (order) => order.product.id !== orderId);
 
        localStorage.setItem('orders.lenght', JSON.stringify(updatedOrders));
        return updatedOrders;
 
      });
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
