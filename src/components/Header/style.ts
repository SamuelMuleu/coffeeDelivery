import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.background};

  > div {
    max-width: 70rem;
    margin: 0 auto;
    padding: 2rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    > div {
      padding: 1rem;
    }
  }
`;

export const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 2.375rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.purpleLight};
  color: ${({ theme }) => theme.colors.purpleDark};
  font-size: 0.875rem;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const CartLink = styled(Link)`
  position: relative;
  display: grid;
  place-content: center;
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.yellowLight};
  color: ${({ theme }) => theme.colors.yellowDark};
`;

export const Badge = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  display: grid;
  place-content: center;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.25rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.yellowDark};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.75rem;
  font-weight: 700;
`;
