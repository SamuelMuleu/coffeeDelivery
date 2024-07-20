import { HomeContainer } from "./styles";


import { Main } from "../../components/Main";
import { Article } from "../../components/Article";

export const Home = () => {
  return (
    <HomeContainer className="header">
  
      <Article/>
      <h2>Nossos Cafés</h2>
      <Main/>
      
      
    </HomeContainer>
  )
}

