import { useState } from "react";
import { Check, ShoppingCart } from "@phosphor-icons/react";
import { Coffee, formatPrice } from "../../data/coffees";
import { useCart } from "../../contexts/CartContext";
import { QuantityInput } from "../QuantityInput";
import { AddButton, CardContainer, Footer, Price, Tags } from "./styles";

export const CoffeeCard = ({ coffee }: { coffee: Coffee }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(coffee.id, quantity);
    setQuantity(1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <CardContainer>
      <img src={coffee.image} alt="" width={120} height={120} loading="lazy" />
      <Tags>
        {coffee.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </Tags>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <Footer>
        <Price>
          R$ <strong>{formatPrice(coffee.price)}</strong>
        </Price>
        <QuantityInput value={quantity} onChange={setQuantity} label={`Quantidade de ${coffee.name}`} />
        <AddButton
          type="button"
          onClick={handleAdd}
          $added={added}
          aria-label={added ? `${coffee.name} adicionado ao carrinho` : `Adicionar ${quantity} ${coffee.name} ao carrinho`}
        >
          {added ? <Check weight="bold" size={20} /> : <ShoppingCart weight="fill" size={20} />}
        </AddButton>
      </Footer>
    </CardContainer>
  );
};
