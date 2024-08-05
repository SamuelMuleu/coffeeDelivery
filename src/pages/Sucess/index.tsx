import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
  SuccessContainer,
  Container,
  SvgColor,
  StatusContainer,
  BorderContainer,
} from "./style";

import illustration from "../../assets/Illustration.png";
import { useFormContext } from "../../contexts/FormContext";
export const Success = () => {
  const { formData } = useFormContext();

  return (
    <SuccessContainer>
      <Container>
        <div>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <BorderContainer>
          <StatusContainer>
            <SuccessContainer>
              <SvgColor variant="purple">
                <MapPin weight="fill" />
              </SvgColor>
              <p>
                Entrega{" "}
                <strong>
   
                  {formData?.rua}, {formData?.numero}{" "}
                </strong>
                <p>
              {formData?.bairro} - {formData?.cidade},{formData?.uf}
            </p>
              </p>
            </SuccessContainer>
     
          </StatusContainer>

          <StatusContainer>
            <SuccessContainer>
              <SvgColor variant="yellow">
                <Timer weight="fill" />
              </SvgColor>
              <p>Previisão de entrega</p>
            </SuccessContainer>
            <strong> 20min-30min</strong>
          </StatusContainer>
          <StatusContainer>
            <SuccessContainer>
              <SvgColor variant="orange">
                <CurrencyDollar weight="fill" />
              </SvgColor>
              <p>Pagamento na entrega</p>
    
              <strong> {formData?.paymentMethod} </strong>
            </SuccessContainer>
     
          </StatusContainer>
        </BorderContainer>
      </Container>
      <img src={illustration} alt="" />
    </SuccessContainer>
  );
};
