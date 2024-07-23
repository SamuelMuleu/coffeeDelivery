import { ArticleContainer, TagsContainer,Container,WordsContainer,SvgColor } from "./style";
import main from "../../assets/main.png";
import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react";



export const Article = () => {
  return (
    <Container>

    <ArticleContainer>

      <WordsContainer>
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      <p>
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
      </p>

      <TagsContainer >
        <SvgColor   variant='orange'>
          <ShoppingCart weight="fill" />
          Compra simples e segura
        </SvgColor>
        <SvgColor variant='gray'>
          <Package weight="fill" />
          Embalagem mantém o café intacto
        </SvgColor>
        <SvgColor variant='yellow'>
          <Timer weight="fill" />
          Entrega rápida e rastreada
        </SvgColor>
        <SvgColor variant='purple'>
          <Coffee weight="fill" />O café chega fresquinho até você
        </SvgColor>
      </TagsContainer>
      </WordsContainer>
    

    </ArticleContainer>

        <img src={main} alt="" />
  
    </Container>
  );
};
