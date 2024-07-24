import styled from "styled-components";


export const Container = styled.div`


`


export const SelectedCoffeeContainer = styled.div`
width: 28rem;
height:5rem ;
display: flex;
gap: 1rem;
flex-direction: row;
margin-bottom: 5rem;


p:nth-child(1){

font-weight: bold;
}
img{
    height: 4rem;
    width: 4rem;
    margin: 1rem;
}

`
export const CounterContainer = styled.div`
display: flex;
align-items: center;

background-color: #EDEDED;
border-radius: 5px;
width: 4rem;
height: 2rem;

button{
    
    border: none;

    color: #4B2995;
cursor: pointer;
}

`
export const SelectdCoffeeNameContainer = styled.div`
height:2rem;
margin-top: 1.4rem;



`

export const ButtonRemoveContainer = styled.button`
display:flex;
border: none;
align-items: center;
justify-content: center;
gap: .3rem;

border-radius: 5px;
background-color: #EDEDED;

height: 2rem;
cursor: pointer;
align-items: center;
justify-content: center;
margin-left: 1rem;


&:hover{
    background-color:#D7D5D5 ;

}


`


export const PriceContainer = styled.div`
height:2rem;
margin-left: 14rem;
font-weight: bold;
margin-top: -1rem;


`

