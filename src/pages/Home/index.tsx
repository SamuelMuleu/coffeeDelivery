import { Article } from "../../components/Article";
import { CoffeeCard } from "../../components/Cards";
import { coffees } from "../../data/coffees";
import { CoffeeList, HomeContainer } from "./styles";

export const Home = () => {
  return (
    <main>
      <Article />
      <HomeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          {coffees.map((coffee) => (
            <li key={coffee.id}>
              <CoffeeCard coffee={coffee} />
            </li>
          ))}
        </CoffeeList>
      </HomeContainer>
    </main>
  );
};
