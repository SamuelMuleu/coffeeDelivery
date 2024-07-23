import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import {  CardsContainer, CompleteOrderContainer, FormContainer } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
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

export const Form = () => {
 
    const [address,setAddress] = useState<FormData>()  ;
    
      const { register, handleSubmit } = useForm<FormData>();


  const onSubmit: SubmitHandler<FormData> = (data) => {
    setAddress(data);
  };
  console.log(address)
  return (
    <CompleteOrderContainer>
      <p> Complete seu pedido</p>
      <p>
        <MapPinLine color="#C47F17" />
        Endereço de Entrega
      </p>
      <p>Informe o endereço onde deseja receber seu pedido</p>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            id="cep"
            placeholder="CEP"
            {...register("cep", { required: true })}
          />
          <input
            id="road"
            placeholder="Rua"
            {...register("rua", { required: true })}
          />
          <input
            id="number"
            placeholder="Número"
            {...register("numero", { required: true })}
          />
          <input
            id="cep"
            {...register("complemento", {
              validate: (value) => !value || value.trim() !== "" || undefined,
            })}
            placeholder="Complemento                                          Opcional"
          />

          <input
            id="neighborhood"
            placeholder="Bairro"
            {...register("bairro", { required: true })}
          />
          <input
            id="city"
            placeholder="Cidade"
            {...register("cidade", { required: true })}
          />
          <input
            id="state"
            placeholder="UF"
            {...register("uf", { required: true })}
          />
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
  );
};

