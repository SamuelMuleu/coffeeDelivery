import {
  CheckoutContainer,



} from "./style";

import {Form} from "../../components/Form"
import { SelectedCoffee } from "../../components/SelectedCoffees";
import { FormProvider } from "../../contexts/FormContext";



export const Checkout = () => {
 


  return (
  
    <FormProvider>

    <CheckoutContainer>
      <Form/>
      <SelectedCoffee/>
   
    
    </CheckoutContainer>
    </FormProvider>
  );
};
