import styled from "styled-components";

type SvgVariant = 'orange' | 'yellow' | 'gray' | 'purple';

interface SvgProps {
    variant: SvgVariant;
}

const SvgVariants = {
    orange: '#C47F17',
    yellow: '#DBAC2C',
    gray: '#574F4D',
    purple: '#8047F8',
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%; 
  padding: 0 1rem; 

  img {
    margin-left: 2rem;

    height: auto; /* Mantém a proporção */
  }

  @media (max-width: 768px) {
margin-left: .5rem;

    img {
width: 12rem;
height: 12rem;
margin-top: 6rem;
margin-right: 3rem;
  }
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 1rem 0;
`;

export const WordsContainer = styled.div`
  width: 100%;
  max-width: 35rem; /* Limita a largura máxima */
  margin-left: 1rem;

  h1 {
    font-weight: 900;
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
  }

  p {
    opacity: 0.6;
    margin-bottom: 1rem;
    width: 100%;
    margin-top: 0.7rem;
  }
`;

export const TagsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin-left: 0;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Ajusta para 1 coluna em telas menores */
    width: 100%;
    margin-left: 0;
  }
`;

export const SvgColor = styled.div<SvgProps>`
  svg {
    border-radius: 50%;
    ${({ variant }) => `background-color: ${SvgVariants[variant]};`}
    align-items: center;
    height: 1.3rem;
    padding: 0.3rem;
    margin-right: 0.4rem;
  }
`;

