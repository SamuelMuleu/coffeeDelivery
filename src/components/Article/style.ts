import styled from "styled-components";
import type { AppTheme } from "../../styles/themes/theme";

export const HeroContainer = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  padding: 5.75rem 1.25rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 3.5rem;

  h1 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.title};
  }

  > div > p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.subtitle};
  }

  img {
    width: 100%;
    max-width: 29.75rem;
    height: auto;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2rem 1.25rem 3rem;
    gap: 2rem;
    text-align: left;

    h1 {
      font-size: 2.25rem;
    }

    img {
      max-width: 20rem;
      justify-self: center;
      grid-row: 1;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.875rem;
    }

    > div > p {
      font-size: 1.0625rem;
    }
  }
`;

export const Benefits = styled.ul`
  list-style: none;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem 2.5rem;

  @media (max-width: 900px) {
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Benefit = styled.li<{ $color: keyof AppTheme["colors"] }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    flex-shrink: 0;
    display: grid;
    place-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${({ theme, $color }) => theme.colors[$color]};
    color: ${({ theme }) => theme.colors.background};
  }
`;
