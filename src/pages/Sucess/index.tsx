import { Navigate } from "react-router-dom";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import illustration from "../../assets/Illustration.png";
import { useCart } from "../../contexts/CartContext";
import { PAYMENT_LABELS } from "../../data/order";
import { formatPrice } from "../../data/coffees";
import { Info, InfoList, SuccessContainer } from "./style";

export const Success = () => {
  const { lastOrder } = useCart();
  if (!lastOrder) return <Navigate to="/" replace />;

  const { address, payment, total } = lastOrder;

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <InfoList>
          <Info $color="purple">
            <span><MapPin weight="fill" size={16} /></span>
            <p>
              Entrega em <strong>{address.street}, {address.number}</strong>
              {address.complement ? ` - ${address.complement}` : ""}
              <br />
              {address.district} - {address.city}, {address.uf}
            </p>
          </Info>
          <Info $color="yellow">
            <span><Timer weight="fill" size={16} /></span>
            <p>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </p>
          </Info>
          <Info $color="yellowDark">
            <span><CurrencyDollar size={16} /></span>
            <p>
              Pagamento na entrega
              <br />
              <strong>{PAYMENT_LABELS[payment]} · R$ {formatPrice(total)}</strong>
            </p>
          </Info>
        </InfoList>
      </div>

      <img src={illustration} alt="Entregador em uma moto levando o pedido" width={492} height={293} />
    </SuccessContainer>
  );
};
