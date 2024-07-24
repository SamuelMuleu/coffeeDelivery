import { useContext, useState } from "react";
import {
  CardContainer,
  Container,
  CounterContainer,
  CategoryContent,
} from "./styles.ts";
import { ProductsContext } from "../Main/index.tsx";
import { Counter } from "../Counter";

export function Card() {
  const products = useContext(ProductsContext);

  const handleUpdate = (
    id: number,
    count: number,
    price: number,
    name: string
  ) => {
    console.log(
      `Produto ID: ${id}, Quantidade: ${count}, Preço: ${price}${name}`
    );
  };

  return (
    <>
      {products.map((product) => (
        <Container key={product.id}>
          <CardContainer>
            <img src={product.image} alt={product.name} />
            <CategoryContent>
              <p>{product.category}</p>

              {product.category2 ? <p>{product.category2}</p> : null}
              {product.category3 ? <p>{product.category3}</p> : null}
            </CategoryContent>
            <h3>{product.name}</h3>
            <span>{product.description}</span>

            <CounterContainer>
              <Counter product={product} onUpdate={handleUpdate} />
            </CounterContainer>
          </CardContainer>
        </Container>
      ))}
    </>
  );
}
