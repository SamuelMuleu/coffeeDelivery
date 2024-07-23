import {
  CheckoutContainer,

  SelectedCoffeeContainer,

} from "./style";

import {Form} from "../../components/Form"






export const Checkout = () => {
 


  return (
  
    
    <CheckoutContainer>
      <Form/>
   
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
