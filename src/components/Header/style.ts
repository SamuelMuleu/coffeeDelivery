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


`
