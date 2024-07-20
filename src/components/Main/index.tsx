import { Card } from "../Cards";
import { MainContainer } from "./style";

import expressoTradicional from "../../assets/Coffee.png";
import expressoAmericano from "../../assets/Image.png";
import expressoCremoso from "../../assets/Image1.png";
import expressoGelado from "../../assets/Image2.png";
import cafeComLeite from "../../assets/Image3.png";
import latte from "../../assets/Image3.png";
import capuccino from "../../assets/Image4.png";
import macchiato from "../../assets/Image5.png";
import mocaccino from "../../assets/Image6.png";
import chocolateQuente from "../../assets/Image7.png";
import cubano from "../../assets/Image8.png";
import havaiano from "../../assets/Image9.png";
import arabe from "../../assets/Image10.png";
import irlandes from "../../assets/Image11.png";
import { createContext } from "react";

const coffees = [
  {
    id: 1,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos.",
    price: 9.9,
    image: expressoTradicional,
    category: "Tradicional",

  },
  {
    id: 2,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional.",
    price: 9.9,
    image: expressoAmericano,
    category: "Tradicional",

  },
  {
    id: 3,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa.",
    price: 9.9,
    image: expressoCremoso,
    category: "Tradicional",
  
  },
  {
    id: 4,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo.",
    price: 9.9,
    image: expressoGelado,
    category: "Tradicional",
    category2: "Gelado",
  },
  {
    id: 5,
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado.",
    price: 9.9,
    image: cafeComLeite,
    category: "Tradicional",
    category2: "Com Leite",
  },
  {
    id: 6,
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa.",
    price: 9.9,
    image: latte,
    category: "Tradicional",
    category2: "Com Leite",
  },
  {
    id: 7,
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma.",
    price: 9.9,
    image: capuccino,
    category: "Tradicional",
    category2: "Com Leite",
  },
  {
    id: 8,
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma.",
    price: 9.9,
    image: macchiato,
    category: "Tradicional",
    category2: "Com Leite",
  },
  {
    id: 9,
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma.",
    price: 9.9,
    image: mocaccino,
    category: "Tradicional",
    category2: "Com Leite",
  },
  {
    id: 10,
    name: "Chocolate Quente",
    description:
      "Bebida feita com chocolate dissolvido no leite quente e café.",
    price: 9.9,
    image: chocolateQuente,
    category: "Tradicional",
    category2: "Com Leite",
  },
  {
    id: 11,
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã.",
    price: 9.9,
    image: cubano,
    category: "Especial",
    category2: "Alcoólico",
    category3: "Gelado",
  },
  {
    id: 12,
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco.",
    price: 9.9,
    image: havaiano,
    category: "Especial",

  },
  {
    id: 13,
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias.",
    price: 9.9,
    image: arabe,
    category: "Especial",

  },
  {
    id: 14,
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly.",
    price: 9.9,
    image: irlandes,
    category: "Especial",
    category2: "Alcoólico",
  },
];

export const ProductsContext = createContext(coffees);
export const Main = () => {
  return (
    <MainContainer>
      <ProductsContext.Provider value={coffees}>
        <Card />
      </ProductsContext.Provider>
    </MainContainer>
  );
};
