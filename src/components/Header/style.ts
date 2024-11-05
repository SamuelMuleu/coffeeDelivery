import styled from "styled-components";

export const HeaderContainer = styled.div`

  background-color: #fff;
  padding: 1rem 8.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;

img {

  height: 2.5rem;
}


  font-size: 16px;
  color: #333;

  span{

display: flex;
align-items: center;

svg{
  margin-right: .3rem;
}

  }
button{
  border-radius: 5px;
  width: 2.3rem;
  border: none;

  align-items: center;
  cursor: pointer;
  background-color: #F1E9C9;
  color:#C47F17 ;
  height: 2.3rem;
  align-items: center;



}

@media (max-width: 768px) {
    padding: 1rem 3rem;
    flex-direction: column;
    align-items: flex-start;

    img {
      height: 2rem;
    }

    button {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;

    img {
      height: 1.8rem;
    }

    span {
      font-size: 14px;
    }

    button {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const LocationContainer = styled.div`
 
    margin-bottom: 1rem;
display: flex;
align-items: center;
font-weight: 500;
gap: 15px;

    color:#8047F8;


`
export const OrderContainer = styled.div`
position: absolute;
top: .7rem;
right: 8.5rem;
color: #ffff;
border-radius:50%;
background-color: #C47F17;
width: 1rem;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
height: 1rem;

@media (max-width: 768px) {
    top: 0.5rem;
    right: 6rem;
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (max-width: 480px) {
    top: 0.5rem;
    left: 4rem;
    width: 1rem;
    height: 1rem;
  }
`
