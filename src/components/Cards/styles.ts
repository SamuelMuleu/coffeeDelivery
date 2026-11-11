import styled from "styled-components";

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem 1.25rem;
  margin-top: 1.25rem;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.colors.card};
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  h3 {
    margin-top: 1rem;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.subtitle};
  }

  > p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.label};
    flex: 1;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.75rem;

  li {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background: ${({ theme }) => theme.colors.yellowLight};
    color: ${({ theme }) => theme.colors.yellowDark};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: 2rem;
`;

export const Price = styled.span`
  margin-right: auto;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;

  strong {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export const AddButton = styled.button<{ $added: boolean }>`
  display: grid;
  place-content: center;
  width: 2.375rem;
  height: 2.375rem;
  border: 0;
  border-radius: 6px;
  background: ${({ theme, $added }) => ($added ? theme.colors.yellowDark : theme.colors.purpleDark)};
  color: ${({ theme }) => theme.colors.card};
  transition: background-color 0.15s;

  &:hover {
    background: ${({ theme, $added }) => ($added ? theme.colors.yellowDark : theme.colors.purple)};
  }
`;
