import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import hero from "../../assets/main.png";
import { Benefit, Benefits, HeroContainer } from "./style";

export const Article = () => {
  return (
    <HeroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <Benefits>
          <Benefit $color="yellowDark">
            <span><ShoppingCart weight="fill" size={16} /></span>
            Compra simples e segura
          </Benefit>
          <Benefit $color="text">
            <span><Package weight="fill" size={16} /></span>
            Embalagem mantém o café intacto
          </Benefit>
          <Benefit $color="yellow">
            <span><Timer weight="fill" size={16} /></span>
            Entrega rápida e rastreada
          </Benefit>
          <Benefit $color="purple">
            <span><Coffee weight="fill" size={16} /></span>
            O café chega fresquinho até você
          </Benefit>
        </Benefits>
      </div>

      <img src={hero} alt="Copo de café do Coffee Delivery cercado de grãos de café" width={476} height={360} />
    </HeroContainer>
  );
};
