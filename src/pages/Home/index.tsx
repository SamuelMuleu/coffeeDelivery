import { HomeContainer } from "./styles";

import { Main } from "../../components/Main";
import { Article } from "../../components/Article";
import { Card } from "../../components/Cards";


export const Home = () => {


  return (
    <HomeContainer>
      <Article />
      <h2>Nossos Cafés</h2>

      <Main />
      <Card />
    </HomeContainer>
  );
};
