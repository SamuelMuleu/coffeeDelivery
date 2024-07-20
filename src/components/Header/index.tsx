
import { HeaderContainer, LocationContainer } from "./style";
import logo from "../../assets/Logo.svg";
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
/*import { ProductsSelectedContext } from "../Cards/index";
import { useContext } from "react";*/


export const Header = () => {

/* const productsSelected = useContext(ProductsSelectedContext)*/
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <img src={logo} alt="Coffee Delivery Logo" className="logo" />
      </Link>
      <LocationContainer>
        <span>
          <MapPin weight="fill" size={20} /> Porto Alegre, RS
        </span>

          <Link to={"/checkout"}>
            <button>
              <ShoppingCart weight="fill" size={20} />

            </button>
          </Link>

      </LocationContainer>
    </HeaderContainer>
  );
};
