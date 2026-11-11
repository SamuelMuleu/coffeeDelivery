import styled from "styled-components";
import type { AppTheme } from "../../styles/themes/theme";

export const SuccessContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  padding: 5rem 1.25rem;
  display: grid;
  grid-template-columns: minmax(0, 32.875rem) minmax(0, 30.75rem);
  justify-content: space-between;
  align-items: end;
  gap: 2.5rem;

  h1 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.yellowDark};
  }

  > div > p {
    margin-top: 0.25rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.subtitle};
  }

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-top: 2.5rem;

    img {
      max-width: 24rem;
      justify-self: center;
    }
  }
`;

export const InfoList = styled.ul`
  list-style: none;
  margin-top: 2.5rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid transparent;
  border-radius: 6px 36px;
  background:
    linear-gradient(${({ theme }) => theme.colors.background}, ${({ theme }) => theme.colors.background}) padding-box,
    linear-gradient(102.89deg, ${({ theme }) => theme.colors.yellow} 2.61%, ${({ theme }) => theme.colors.purple} 98.76%) border-box;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const Info = styled.li<{ $color: keyof AppTheme["colors"] }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > span {
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
