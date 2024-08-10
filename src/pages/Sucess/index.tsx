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
                Entrega em {" "}
                <strong>
                  {formData?.rua}, {formData?.numero}{" "}
                </strong>
                <p style={{position:'relative',bottom:'.8rem'}}>
                  {formData?.bairro} - {formData?.cidade},{formData?.uf}
                </p>
              </p>
            </SuccessContainer>
          </StatusContainer>

          <StatusContainer>
            <SuccessContainer style={{marginTop:'-1rem'}}>
              <SvgColor variant="yellow">
                <Timer weight="fill" />
              </SvgColor>
              <div>

              <p>
                Previsão de entrega
                </p>
          
            <p >
      
                <p style={{fontWeight:'bold',position:'absolute',left:'9rem' ,top:'21.9rem'}}> 20min-30min</p>
              </p>
              </div>
            </SuccessContainer>
          </StatusContainer>
          <StatusContainer>
            <SuccessContainer>
              <SvgColor variant="orange">
                <CurrencyDollar weight="fill" />
              </SvgColor>
              <p>Pagamento na entrega</p>

              <p>
                <p style={{fontWeight:'bold',position:'absolute',left:'9rem' ,top:'24.9rem'}}> {formData?.paymentMethod} </p>
              </p>
            </SuccessContainer>
          </StatusContainer>
        </BorderContainer>
      </Container>
      <img src={illustration} alt="" />
    </SuccessContainer>
  );
};
