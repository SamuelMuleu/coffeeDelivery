import styled, { css } from "styled-components";
import type { AppTheme } from "../../styles/themes/theme";

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2.5rem 1.25rem 6rem;
  display: grid;
  grid-template-columns: minmax(0, 40rem) minmax(0, 28rem);
  justify-content: space-between;
  gap: 2rem;

  > section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  h2 {
    margin-bottom: 0.25rem;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 1.125rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.subtitle};
  }

  .error {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.error};
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.card};

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

export const BoxHeader = styled.div<{ $icon: keyof AppTheme["colors"] }>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    flex-shrink: 0;
    color: ${({ theme, $icon }) => theme.colors[$icon]};
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.subtitle};
  }

  p {
    margin-top: 0.125rem;
    font-size: 0.875rem;
  }
`;

export const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number complement complement"
    "district city uf";
  gap: 1rem 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr 4.5rem;
    grid-template-areas:
      "cep cep"
      "street street"
      "number number"
      "complement complement"
      "district district"
      "city uf";
  }
`;

export const Field = styled.div<{ $area: string; $error?: boolean }>`
  grid-area: ${({ $area }) => $area};
  position: relative;

  input {
    width: 100%;
    height: 2.625rem;
    padding: 0 0.75rem;
    border-radius: 4px;
    border: 1px solid ${({ theme, $error }) => ($error ? theme.colors.error : theme.colors.button)};
    background: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.875rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.label};
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.yellowDark};
    }
  }

  em {
    position: absolute;
    right: 0.75rem;
    top: 0.75rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.label};
  }

  small {
    display: block;
    margin-top: 0.25rem;
    font-size: 0.75rem;
    color: ${({ theme, $error }) => ($error ? theme.colors.error : theme.colors.label)};
  }
`;

export const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    height: 100%;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid transparent;
    background: ${({ theme }) => theme.colors.button};
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.75rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.15s, border-color 0.15s;

    svg {
      flex-shrink: 0;
      color: ${({ theme }) => theme.colors.purple};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.hover};
    }
  }

  input:checked + span {
    border-color: ${({ theme }) => theme.colors.purple};
    background: ${({ theme }) => theme.colors.purpleLight};
  }

  input:focus-visible + span {
    outline: 2px solid ${({ theme }) => theme.colors.purple};
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Summary = styled.div`
  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${({ theme }) => theme.colors.card};

  > ul {
    list-style: none;
  }

  dl {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin: 1.5rem 0;

    > div {
      display: flex;
      justify-content: space-between;
      font-size: 0.875rem;
    }

    > div:last-child {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.subtitle};
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    border-radius: 6px 28px;
  }
`;

export const CartItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.button};

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    flex: 1;
    min-width: 0;

    p {
      color: ${({ theme }) => theme.colors.subtitle};
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      height: 2rem;
      padding: 0 0.5rem;
      border: 0;
      border-radius: 6px;
      background: ${({ theme }) => theme.colors.button};
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.75rem;
      text-transform: uppercase;

      svg {
        color: ${({ theme }) => theme.colors.purple};
      }

      &:hover {
        background: ${({ theme }) => theme.colors.hover};
      }
    }
  }

  strong {
    white-space: nowrap;
  }

  @media (max-width: 400px) {
    gap: 0.75rem;

    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const primaryButton = css`
  display: grid;
  place-content: center;
  width: 100%;
  height: 2.875rem;
  border: 0;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.15s;

  &:hover {
    background: ${({ theme }) => theme.colors.yellowDark};
  }
`;

export const ConfirmButton = styled.button`
  ${primaryButton}
`;

export const EmptyCart = styled.main`
  max-width: 28rem;
  margin: 0 auto;
  padding: 6rem 1.25rem;
  text-align: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.subtitle};
  }

  p {
    margin: 0.5rem 0 2rem;
  }

  a {
    ${primaryButton}
  }
`;
