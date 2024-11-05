import styled from "styled-components";

export const CompleteOrderContainer = styled.div`
  background-color: #EDEDED;
  p:nth-child(1) {
    font-weight: bold;
  }
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    border: none;
    margin: 0.3rem;
    height: 2.6rem;
    border-radius: 8px;
    width: 100%; /* Garantir que ocupe a largura do contêiner */
  }

  input::placeholder {
    font-weight: 600;
    opacity: 0.6;
    padding: 1rem;
  }

  input:focus {
    outline: 1px solid transparent;
  }

  input:nth-child(3) {
    width: 38rem;
  }
  input:nth-child(1),
  input:nth-child(5),
  input:nth-child(7) {
    width: 12.5rem;
  }
  input:nth-child(4) {
    width: 32rem;
  }
  input:nth-child(6) {
    width: 26rem;
  }

  /* Responsividade para inputs */
  @media (max-width: 1024px) {
    input:nth-child(3), input:nth-child(4) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    input {
      width: 100%; /* Inputs ocupando a largura total */
    }
  }

  @media (max-width: 480px) {
    input:nth-child(3), input:nth-child(4) {
      width: 100%;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 4rem;

  button {
    border: none;
    border-radius: 8px;
    background-color: #ddd9d9;
    display: flex;
    align-items: center;
    gap: 5px;
    width: 11rem;
    height: 3rem;
  }

  button:focus {
    outline: 1px solid #4B2995;
    background-color: #b2a4fb;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    button {
      width: 100%; /* Botões ocupando a largura total */
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const SelectedCoffeeContainer = styled.div`
  width: 28rem;
  height: 5rem;
  display: flex;
  gap: 1rem;
  flex-direction: row;
  margin-bottom: 5rem;

  p:nth-child(1) {
    font-weight: bold;
  }

  img {
    height: 4rem;
    width: 4rem;
    margin: 1rem;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 480px) {
    img {
      height: 3rem;
      width: 3rem;
    }
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #EDEDED;
  border-radius: 5px;
  width: 4rem;
  height: 2rem;

  button {
    border: none;
    color: #4B2995;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    width: 3rem;
    height: 1.8rem;
  }
`;

export const SelectdCoffeeNameContainer = styled.div`
  height: 2rem;
  margin-top: 1.4rem;
`;

export const ButtonRemoveContainer = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  border-radius: 5px;
  background-color: #EDEDED;
  height: 2rem;
  cursor: pointer;

  margin-left: 1rem;

  &:hover {
    background-color: #D7D5D5;
  }

  @media (max-width: 480px) {
    height: 1.8rem;
    gap: 0.2rem;
  }
`;

export const PriceContainer = styled.div`
  height: 2rem;
  margin-left: 14rem;
  font-weight: bold;
  margin-top: -1rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

export const TotalItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 13rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 9px;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const ButtonPrices = styled.button`
  background-color: #DBAC2C;
  color: white;
  border: none;
  width: 23rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;

  &:hover {
    transform: scale(1.1);
  }

  /* Responsividade */
  @media (max-width: 768px) {
    width: 100%;
    height: 2.5rem;
  }

  @media (max-width: 480px) {
    height: 2.3rem;
  }
`;
