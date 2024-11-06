import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Ajuste para criar 4 colunas */

  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  height: 20rem;
  margin: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    height: 6rem;
    width: 6rem;
    object-fit: cover;
    margin-bottom: 8px;
    margin-left: auto;
    margin-right: auto;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  span {
    opacity: 0.5;
    margin-bottom: 2rem;
  }

  /* Responsividade */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Ajuste para 3 colunas */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Ajuste para 2 colunas */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* Ajuste para 1 coluna em dispositivos móveis */
    height: auto;
    margin: 0.5rem;
  }
`;

export const CategoryContent = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  display: flex;

  gap: 20px;
  align-items: center;
  justify-content: center;

  p {
    background-color: #F1E9C9;
    padding: 0.4rem;
    border-radius: 8px;
    color: #C47F17;
    font-weight: 500;
  }

  /* Responsividade */
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const PriceContainer = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
`;

export const CounterContainer = styled.div`
  /* Adicionar estilos conforme necessário */
`;
