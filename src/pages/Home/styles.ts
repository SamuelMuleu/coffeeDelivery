import styled from "styled-components";

export const HomeContainer = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 1.25rem 9rem;

  h2 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.subtitle};
  }
`;

export const CoffeeList = styled.ul`
  list-style: none;
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.5rem, 1fr));
  gap: 2.5rem 2rem;

  > li {
    display: flex;
  }

  > li > article {
    flex: 1;
  }
`;
