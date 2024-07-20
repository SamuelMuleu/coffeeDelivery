import {
  CheckoutContainer,
  CompleteOrderContainer,
  SelectedCoffeeContainer,
  FormContainer,
  CardsContainer
} from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  MapPinLine,
  CurrencyDollar,
  Bank,
  CreditCard,
  Money,
} from "@phosphor-icons/react";
import { useState } from "react";


interface FormData {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}



export const Checkout = () => {
  const {
    register,
    handleSubmit,
  } = useForm<FormData>();
  const [address,setAddress] = useState<FormData>()  

  const onSubmit: SubmitHandler<FormData>  = (data) => {
   setAddress(data);
  };

  console.log(address)
  return (
    <CheckoutContainer>
      <CompleteOrderContainer>
        <p> Complete seu pedido</p>
        <p>
          <MapPinLine color="#C47F17" />
          Endereço de Entrega
        </p>
        <p>Informe o endereço onde deseja receber seu pedido</p>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input id="cep" placeholder="CEP"{...register("cep", { required: true })}  />
            <input id="road" placeholder="Rua"{...register("rua", { required: true })}  />
            <input id="number" placeholder="Número"{...register("numero", { required: true })}  />
            <input
              id="cep" {...register("complemento", {
                validate: value => !value || value.trim() !== "" ||undefined
              })}
              placeholder="Complemento                                          Opcional"
              
            />

            <input id="neighborhood" placeholder="Bairro"{...register("bairro", { required: true })}  />
            <input id="city" placeholder="Cidade"{...register("cidade", { required: true })}  />
            <input id="state" placeholder="UF"{...register("uf", { required: true })}  />

          </form>
        </FormContainer>
        <div>
          <CurrencyDollar color="#8047F8" size={20} /> pagamento
        </div>

        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

        <CardsContainer>
          <button>
            <CreditCard color="#8047F8" size={20} />
            Cartão de Crédito
          </button>
          <button>
            <Bank color="#8047F8" size={20} /> cartão de débito
          </button>
          <button>
     
            <Money color="#8047F8" size={20} />
            dinheiro
          </button>
        </CardsContainer>
      </CompleteOrderContainer>

      <SelectedCoffeeContainer>
        <p> Cafés Selecionados</p>
        <div>
          <div>
            <div>Café</div>
            <div>Café</div>
          </div>
          <div>
            <div>Total de itens</div>
            <div>Entrega</div>
            <div>Total</div>
            <div >

            <div>R$ 22,90</div>
            <div>R$ 22,90</div>
            <div>R$ 22,90</div>
            </div>
            <button>Confimar pedido</button>
          </div>
        </div>
      </SelectedCoffeeContainer>
    </CheckoutContainer>
  );
};
