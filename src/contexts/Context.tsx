import  { ReactNode, useState, createContext, FC } from 'react';

interface Product {
  id: number;
  name:string;
  count: number;
  price: number;
  image:string;

}

interface Order {
  product: Product;
  quantity: number;
}

interface OrderContextProps {
  orders: Order[];
  addOrder: (order: Order) => void;
}

interface OrderProviderProps {
  children: ReactNode;
}

const defaultContextValue: OrderContextProps = {
  orders: [],
  addOrder: () => {}
};

export const OrderContext = createContext<OrderContextProps>(defaultContextValue);

export const OrderProvider: FC<OrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {


    setOrders([...orders, order]);

    if(order.quantity <= 0 ){
      setOrders([...orders])
    }
  };


  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
