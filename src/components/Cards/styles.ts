import styled from "styled-components";



export const Container = styled.div`
`

export const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(4fr,50%);

background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;

  height: 20rem;
  margin: 1rem;

  
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  img{
    height: 6rem;
  width: 6rem;
  object-fit: cover;
  margin-bottom: 8px;
  margin-left: 5rem;
  h3{
    font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px; 
  }
  }

span{
  opacity: 0.5;
  margin-bottom: 2rem;
}
`

export const CategoryContent = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  p{

    background-color: #F1E9C9;
    padding: .4rem;

    border-radius: 8px;
    color: #C47F17;
    font-weight: 500;

  }
`

export const PriceContainer = styled.div`

font-size: 16px;
  color: #333;
  margin-bottom: 8px;

`

export const CounterContainer = styled.div`

`