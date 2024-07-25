import { useContext, useEffect, useState } from "react";
import {
  SelectedCoffeeContainer,
  CounterContainer,
  Container,
  SelectdCoffeeNameContainer,
  ButtonRemoveContainer,
  PriceContainer,
} from "./styles";
import { OrderContext } from "../../contexts/Context";

import { Plus, Trash, Minus } from "@phosphor-icons/react";

export const SelectedCoffee = () => {
  const { orders } = useContext(OrderContext);
  const [sumPrice, setSumPrice] = useState<number>();
  const [delivery, setDelivery] = useState<number>();
  const [total, setTotal] = useState<number>();

  const handleRemove = (order: number) => {
    console.log(`${order}Remover`);
  };

  useEffect(()=>{


    if (orders) {
      const prices = orders.reduce((total,order) => {
  
  
        return total + order.product.price;
      },0);
  
      setSumPrice(parseFloat(prices.toFixed(3)));
      setDelivery(3.50)
    }

    if( sumPrice && delivery ){{

      const totalSum =  sumPrice + delivery

  setTotal(parseFloat(totalSum.toFixed(2)))
    }

  }


  },[delivery,orders,sumPrice])



  return (
    <Container>
      <p> Cafés Selecionados</p>

      {orders.length > 0
        ? orders.map((order) => (
            <SelectedCoffeeContainer key={order.product.id}>
              <div>
                <img src={order.product.image} alt="" />
              </div>
              <div>
                <SelectdCoffeeNameContainer>
                  <div>{order.product.name}</div>

                  <PriceContainer>
                    R$ {order.product.price.toFixed(2)}
                  </PriceContainer>
                  <CounterContainer>
                    <button>
                      <Minus />
                    </button>
                    <div>{order.quantity}</div>
                    <button>
                      <Plus />
                    </button>

                    <ButtonRemoveContainer
                      onClick={() => handleRemove(order.product.id)}
                      style={{ color: "#272221" }}
                    >
                      {" "}
                      <Trash color="#8047F8" size={18} />
                      remover
                    </ButtonRemoveContainer>
                  </CounterContainer>
                </SelectdCoffeeNameContainer>

                <div></div>
              </div>
            </SelectedCoffeeContainer>
          ))
        : null}

      <div>
        <div>Total de itens </div>
        <div>R${sumPrice}</div>
        <div>Entrega</div>
        <div>R$ {delivery?.toFixed(2)}</div>
        <div>Total</div>
        <div>{total}</div>

        <button>Confimar pedido</button>
      </div>
    </Container>
  );
};
