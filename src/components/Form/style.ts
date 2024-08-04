import styled from "styled-components";

export const CompleteOrderContainer = styled.div`
background-color: #EDEDED;

p:nth-child(1){

font-weight: bold;
}
display: flex;


`


export const FormContainer = styled.div`



input{
    border: none;
    margin: .3rem;
    height: 2.6rem;

    border-radius: 8px;
}
input::placeholder{
    font-weight: 600;
    opacity: 0.6;
    padding: 1rem;
}
input:focus{
    outline: 1px solid transparent;
}


input:nth-child(3){
width: 38rem;

}
input:nth-child(),input:nth-child(5),input:nth-child(1){
width: 12.5rem;
}
input:nth-child(4){
width: 32rem;
}
input:nth-child(6){
width: 26rem;
}
input:nth-child(7){
width: 3.8rem;
}

`

export const CardsContainer = styled.div`
display: flex;
gap: 20px;
margin-bottom: 4rem;

button{
    border: none;
    border-radius: 8px;
    background-color: #ddd9d9;
    display: flex;
    align-items: center;
    gap: 5px;
width: 11rem;
    height: 3rem;

}
button:focus{
outline: 1px solid #4B2995;
background-color:#b2a4fb;
}
`


export const Container = styled.div`

display: flex;
align-items: center;
flex-direction: column;

justify-content: center;


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

export const TotalItems = styled.div`
display: flex;



flex-direction: row;
justify-content: space-between;
margin-bottom: 2rem;
gap: 13rem;
div{
    display: flex;
    flex-direction: column;
justify-content: space-between;
gap: 9px;

}


`
export const ButtonPrices = styled.button`
background-color:#DBAC2C;
color: white;
border: none;

width: 23rem;
height: 2.8rem;
display: flex;
align-items: center;
justify-content: center;
font-weight: bold;
font-size: 1rem;
border-radius:5px;

&:hover{
    transform:scale(1.1) ;

}
`
