import styled from "styled-components";


type SvgVariant = 'orange' | 'yellow' | 'purple';


interface SvgProps {
    variant: SvgVariant;
}

const SvgVariants = {

    orange: '#C47F17',
    yellow: '#DBAC2C',
    purple: '#8047F8',
}



export const SuccessContainer = styled.div`

display: flex;

justify-content: space-around;

align-items: center; 

h2{
    color:#C47F17 ;
}
 img{
    margin-top: 6rem;
 }

 div{
    display: flex;
    flex-direction: column;
 



}


`

export const Container = styled.div`

display: flex;
flex-direction: column;


min-width: 32rem;

min-height: 14rem;



`


export const BorderContainer = styled.div`
border: 1px solid transparent; 
max-height: 16rem;
min-width: 32rem;
border-radius: 20px;

  border-image: linear-gradient(to right, red, yellow, green); 
  border-image-slice: 1;
padding: 2rem;
align-items: start;

div{


overflow: hidden;
display: flex;
flex-direction: row;


}


`


export const SvgColor = styled.div<SvgProps>`


svg{
    border-radius: 50%;
    ${({ variant }) => `background-color: ${SvgVariants[variant as SvgVariant]};`}
    align-items: center;
    height: 1.2rem;
    padding: .3rem;
    margin-right:.7rem;
margin-top:1rem;
}






`

export const StatusContainer = styled.div`
div{
    display: flex;
    align-items: center;
    justify-content: center;
    place-items: inherit;
  
}

display: flex;
flex-direction: column;
align-items: start;

`
