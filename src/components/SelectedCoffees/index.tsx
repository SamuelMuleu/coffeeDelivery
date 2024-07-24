import { useContext } from "react";
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
  console.log(orders);

  const handleRemove = (order: number) => {
    console.log(order);
  };

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

                <div>
                  {/*
                <div>Total</div>
               
                <button>Confimar pedido</button> */}
                </div>
              </div>
            </SelectedCoffeeContainer>
          ))
        : null}
    </Container>
  );
};
