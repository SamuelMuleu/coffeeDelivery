import { HeaderContainer, LocationContainer, OrderContainer } from "./style";
import logo from "../../assets/Logo.svg";
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { OrderContext } from "../../contexts/Context";
import { useContext, useEffect, useState } from "react";

export const Header = () => {
  const { orders } = useContext(OrderContext);

  const [totalItems, setTotalItems] = useState(0);

  useEffect(()=>{

    const totalItems = orders.reduce((total, order) => {
      return total + order.quantity;
    }, 0);
    console.log(orders)
    setTotalItems(totalItems);


  },[orders])



  useEffect(() => {

    const storedOrdersLength = localStorage.getItem("orders.length");
    if (storedOrdersLength) {
      setTotalItems(Number(storedOrdersLength));
    }
  }, []);
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

            {totalItems ? (
              <OrderContainer>
                <span>{totalItems}</span>
              </OrderContainer>
            ) : null}
          </button>
        </Link>
      </LocationContainer>
    </HeaderContainer>
  );
};
