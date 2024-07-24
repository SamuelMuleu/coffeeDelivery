import styled from "styled-components";

export const CompleteOrderContainer = styled.div`
background-color: #EDEDED;
p:nth-child(1){

font-weight: bold;
}
div{
    display: flex;
    align-items: center;


}
`


export const FormContainer = styled.div`

display: flex;
width:40rem;


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
input:nth-child(2){
width: 34.5rem;

}
input:nth-child(3),input:nth-child(5),input:nth-child(1){
width: 12.5rem;
}
input:nth-child(4){
width: 21.5rem;
}
input:nth-child(6){
width: 17.2rem;
}
input:nth-child(7){
width: 3.8rem;
}

`

export const CardsContainer = styled.div`
display: flex;
gap: 20px;

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
