import tradicional from "../assets/Coffee.png";
import americano from "../assets/Image.png";
import cremoso from "../assets/Image1.png";
import gelado from "../assets/Image2.png";
import cafeComLeite from "../assets/Image3.png";
import latte from "../assets/Image4.png";
import capuccino from "../assets/Image5.png";
import macchiato from "../assets/Image6.png";
import mocaccino from "../assets/Image7.png";
import chocolateQuente from "../assets/Image8.png";
import cubano from "../assets/Image9.png";
import havaiano from "../assets/Image10.png";
import arabe from "../assets/Image11.png";
import irlandes from "../assets/Image12.png";

export interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

export const coffees: Coffee[] = [
  { id: 1, name: "Expresso Tradicional", description: "O tradicional café feito com água quente e grãos moídos", price: 9.9, image: tradicional, tags: ["Tradicional"] },
  { id: 2, name: "Expresso Americano", description: "Expresso diluído, menos intenso que o tradicional", price: 9.9, image: americano, tags: ["Tradicional"] },
  { id: 3, name: "Expresso Cremoso", description: "Café expresso tradicional com espuma cremosa", price: 9.9, image: cremoso, tags: ["Tradicional"] },
  { id: 4, name: "Expresso Gelado", description: "Bebida preparada com café expresso e cubos de gelo", price: 9.9, image: gelado, tags: ["Tradicional", "Gelado"] },
  { id: 5, name: "Café com Leite", description: "Meio a meio de expresso tradicional com leite vaporizado", price: 9.9, image: cafeComLeite, tags: ["Tradicional", "Com leite"] },
  { id: 6, name: "Latte", description: "Uma dose de café expresso com o dobro de leite e espuma cremosa", price: 9.9, image: latte, tags: ["Tradicional", "Com leite"] },
  { id: 7, name: "Capuccino", description: "Bebida com canela feita de doses iguais de café, leite e espuma", price: 9.9, image: capuccino, tags: ["Tradicional", "Com leite"] },
  { id: 8, name: "Macchiato", description: "Café expresso misturado com um pouco de leite quente e espuma", price: 9.9, image: macchiato, tags: ["Tradicional", "Com leite"] },
  { id: 9, name: "Mocaccino", description: "Café expresso com calda de chocolate, pouco leite e espuma", price: 9.9, image: mocaccino, tags: ["Tradicional", "Com leite"] },
  { id: 10, name: "Chocolate Quente", description: "Bebida feita com chocolate dissolvido no leite quente e café", price: 9.9, image: chocolateQuente, tags: ["Especial", "Com leite"] },
  { id: 11, name: "Cubano", description: "Drink gelado de café expresso com rum, creme de leite e hortelã", price: 9.9, image: cubano, tags: ["Especial", "Alcoólico", "Gelado"] },
  { id: 12, name: "Havaiano", description: "Bebida adocicada preparada com café e leite de coco", price: 9.9, image: havaiano, tags: ["Especial"] },
  { id: 13, name: "Árabe", description: "Bebida preparada com grãos de café árabe e especiarias", price: 9.9, image: arabe, tags: ["Especial"] },
  { id: 14, name: "Irlandês", description: "Bebida a base de café, uísque irlandês, açúcar e chantilly", price: 9.9, image: irlandes, tags: ["Especial", "Alcoólico"] },
];

export const DELIVERY_FEE = 3.5;

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
