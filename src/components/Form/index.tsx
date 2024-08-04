import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Plus,
  Trash,
  Minus,
} from "@phosphor-icons/react";
import {
  CardsContainer,
  CompleteOrderContainer,
  FormContainer,
  SelectedCoffeeContainer,
  CounterContainer,
  Container,
  SelectdCoffeeNameContainer,
  ButtonRemoveContainer,
  PriceContainer,
  TotalItems,
  ButtonPrices,
} from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { OrderContext } from "../../contexts/Context";
import { useContext, useEffect, useState } from "react";

interface FormData {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;




}

export const Form = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [sumPrice, setSumPrice] = useState<number>(0);
  const [delivery, setDelivery] = useState<number>(3.5);
  const [total, setTotal] = useState<number>(0);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const { orders, removeOrder } = useContext(OrderContext);
  const navigate = useNavigate();
  
  
  
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", { ...data, paymentMethod });
 
    navigate('/success');
  };

  useEffect(() => {
    if (orders) {
      const prices = orders.reduce(
        (total, order) => total + order.product.price * order.quantity,
        0
      );
      setSumPrice(prices);
      setDelivery(3.5);
    }
  }, [orders]);

  useEffect(() => {
    setTotal(sumPrice + delivery);
  }, [sumPrice, delivery]);


  const handlePaymentSelection = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <CompleteOrderContainer>
      <div>
        <p>Complete seu pedido</p>
        <p>
          <MapPinLine color="#C47F17" />
          Endereço de Entrega
        </p>
        <p>Informe o endereço onde deseja receber seu pedido</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <input
              id="cep"
              placeholder="CEP"
              {...register("cep", { required: true })}
            />
            <br />
            <input
              id="rua"
              placeholder="Rua"
              {...register("rua", { required: true })}
            />
            <br />
            <input
              id="numero"
              placeholder="Número"
              {...register("numero", { required: true })}
            />
            <input
              id="complemento"
              placeholder="Complemento (Opcional)"
              {...register("complemento")}
            />
            <br />
            <input
              id="bairro"
              placeholder="Bairro"
              {...register("bairro", { required: true })}
            />
            <input
              id="cidade"
              placeholder="Cidade"
              {...register("cidade", { required: true })}
            />
            <input
              id="uf"
              placeholder="UF"
              {...register("uf", { required: true })}
            />
          </FormContainer>
          <div style={{ display: "flex", marginTop: "4rem" }}>
            <CurrencyDollar color="#8047F8" size={20} /> Pagamento
          </div>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <CardsContainer>
            <button
              type="button"
              id="credit"
              onClick={() => handlePaymentSelection("credit")}
            >
              <CreditCard color="#8047F8" size={20} />
              Cartão de Crédito
            </button>
            <button
              type="button"
              id="debit"
              onClick={() => handlePaymentSelection("debit")}
            >
              <Bank color="#8047F8" size={20} />
              Cartão de Débito
            </button>
            <button type="button">
              <Money
                color="#8047F8"
                size={20}
                id="money"
                onClick={() => handlePaymentSelection("money")}
              />
              Dinheiro
            </button>
          </CardsContainer>
        </form>
      </div>
      <Container>
        <p>Cafés Selecionados</p>
        {orders.length > 0 ? (
          orders.map((order) => (
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
                      onClick={() => removeOrder(order.product.id)}
                      style={{ color: "#272221" }}
                    >
                      <Trash color="#8047F8" size={18} />
                      Remover
                    </ButtonRemoveContainer>
                  </CounterContainer>
                </SelectdCoffeeNameContainer>
              </div>
            </SelectedCoffeeContainer>
          ))
        ) : (
          <p>Nenhum café selecionado</p>
        )}
        <TotalItems>
          <div>
            <div>Total de itens</div>
            <div>Entrega</div>
            <strong>Total</strong>
          </div>
          <div>
            <div>R$ {sumPrice.toFixed(2)}</div>
            <div>R$ {delivery.toFixed(2)}</div>
            <strong>R$ {total.toFixed(2)}</strong>
          </div>
        </TotalItems>

          <ButtonPrices onClick={handleSubmit(onSubmit)}>
            Confirmar pedido
          </ButtonPrices>
 
      </Container>
    </CompleteOrderContainer>
  );
};
