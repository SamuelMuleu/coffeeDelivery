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



`

export const Container = styled.div`

display: flex;
flex-direction: column;


width: 32rem;

height: 14rem;



`


export const BorderContainer = styled.div`
border: 1px solid transparent; 

border-radius: 20px;

  border-image: linear-gradient(to right, red, yellow, green); 
  border-image-slice: 1;
padding: 1rem;

`


export const SvgColor = styled.div<SvgProps>`



svg{

    border-radius: 50%;
    ${({ variant }) => `background-color: ${SvgVariants[variant as SvgVariant]};`}
    align-items: center;
    height: 1.2rem;
    padding: .3rem;
    margin-right: .4rem;
}






`

export const StatusContainer = styled.div`
div{
    display: flex;
    align-items: center;
    justify-content: center;
  
}

display: flex;
flex-direction: column;
align-items: start;

`
