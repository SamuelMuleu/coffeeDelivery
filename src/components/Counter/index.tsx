import { useContext, useState } from "react";
import { ButtonShopping, CounterContainer, CounteCountainer } from "./style";
import { ShoppingCart } from "@phosphor-icons/react";
import { OrderContext } from "../../contexts/Context";

interface Product {
  id: number;
  price: number;
  name: string;
  image: string;
}

interface Props {
  product?: Product;
  onUpdate: (
    id: number,
    count: number,
    price: number,
    name: string,
    image: string
  ) => void;
}

export function Counter({ product, onUpdate }: Props) {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const { orders, addOrder } = useContext(OrderContext);
  const ordersString = JSON.stringify(orders);

  localStorage.setItem("orders.lenght", ordersString);
  const handleAddOrder = () => {
    if (product) {
      addOrder({
        product: {
          id: Math.random(),
          count: count,
          price: price,
          name: product.name,
          image: product.image,
        },
        quantity: count,
      });
    }
  };

  const inc = () => {
    if (product && onUpdate) {
      const newCount = count + 1;
      const newPrice = price + product.price;
      setCount(newCount);
      setPrice(newPrice);
      onUpdate(product.id, newCount, newPrice, product.name, product.image);
    }
  };

  const dec = () => {
    if (count > 0 && product && onUpdate) {
      const newCount = count - 1;
      const newPrice = price - product.price;
      setCount(newCount);
      setPrice(newPrice);
      onUpdate(product.id, newCount, newPrice, product.name, product.image);
    }
  };

  return (
    <CounterContainer>
      {product ? <div>R${(count * product.price).toFixed(2)}</div> : null}

      <CounteCountainer>
        <button onClick={dec}>-</button>
        {count}
        <button onClick={inc}>+</button>
      </CounteCountainer>
      <ButtonShopping>
        <button onClick={handleAddOrder}>
          <ShoppingCart weight="fill" size={20} />
        </button>
      </ButtonShopping>
    </CounterContainer>
  );
}
