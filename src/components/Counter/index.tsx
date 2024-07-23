import { useContext, useState } from "react";
import { ButtonShopping, CounterContainer, CounteCountainer } from "./style";
import { ShoppingCart } from "@phosphor-icons/react";
import { OrderContext } from "../../contexts/Context";


interface Product {
  id:number;
  price: number;
}

interface Props {
  product: Product;
  onUpdate: (id: number, count: number, price: number) => void; 
}

export function Counter({ product,onUpdate }: Props) {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
   const { addOrder } = useContext(OrderContext);


  const handleAddOrder = () => {

    
    addOrder({ product: { id: Math.random(), count, price: 10 }, quantity: count });

  };


  const inc = () => {
    const newCount = count + 1;
    const newPrice = price + product.price;
    setCount(newCount);
    setPrice(newPrice);
    onUpdate(product.id, newCount, newPrice);
 
  };

  const dec = () => {
    if (count > 0) {
      const newCount = count - 1;
      const newPrice = price - product.price;
      setCount(newCount);
      setPrice(newPrice);
      onUpdate(product.id, newCount, newPrice);
}
  };






  return (
    <CounterContainer>
      <div>R${(count * product.price).toFixed(2)}</div>

      <CounteCountainer>
        <button onClick={dec}>-</button>
        {count}
        <button onClick={inc}>+</button>
      </CounteCountainer>
      <ButtonShopping>
  
        <button
        onClick={handleAddOrder}
       >
          <ShoppingCart weight="fill" size={20} />
        
        </button>

      </ButtonShopping>
    </CounterContainer>
  );
}
