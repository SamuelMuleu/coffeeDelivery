import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import logo from "../../assets/Logo.svg";
import { useCart } from "../../contexts/CartContext";
import { Badge, CartLink, HeaderContainer, Location } from "./style";

export const Header = () => {
  const { itemsCount, lastOrder } = useCart();
  const place = lastOrder ? `${lastOrder.address.city}, ${lastOrder.address.uf}` : "Rio de Janeiro, RJ";

  return (
    <HeaderContainer>
      <div>
        <Link to="/" aria-label="Coffee Delivery, página inicial">
          <img src={logo} alt="Coffee Delivery" width={85} height={40} />
        </Link>
        <nav>
          <Location>
            <MapPin weight="fill" size={22} aria-hidden />
            {place}
          </Location>
          <CartLink to="/checkout" aria-label={`Carrinho, ${itemsCount} ${itemsCount === 1 ? "item" : "itens"}`}>
            <ShoppingCart weight="fill" size={22} />
            {itemsCount > 0 && <Badge aria-hidden>{itemsCount}</Badge>}
          </CartLink>
        </nav>
      </div>
    </HeaderContainer>
  );
};
