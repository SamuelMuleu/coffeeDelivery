import styled from "styled-components";


type SvgVariant = 'orange' | 'yellow' | 'gray' | 'purple';


interface SvgProps {
    variant: SvgVariant;
}

const SvgVariants = {

    orange: '#C47F17',
    yellow: '#DBAC2C',
    gray: '#574F4D',
    purple: '#8047F8',
}


export const Container = styled.div`

display: flex;
justify-content: center;

width: 90rem;
img{
    margin-left: 2rem;
}
`

export const ArticleContainer = styled.div`

display:flex;

flex-direction: column;
align-items: center;

height: 10rem;

margin: 3rem;



`

export const WordsContainer = styled.div`
width:36rem;
h1{
    height: 5rem;
    font-weight: 900;
    width: 35rem;
    display: flex;
    align-items: center;
   margin-left: 4rem;
   font-size: 2.7rem;

}
p{
    opacity: 0.6;
    margin-bottom: 3rem;
    width: 35rem;

    margin-left: 4rem;
    margin-top: .7rem;
}

`


export const TagsContainer = styled.div<SvgProps>`


display: grid;
grid-template-columns: repeat(2,1fr);

height:7rem;
width: 35.2rem;

margin-left: 3.1rem;


div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
svg{

}

`

export const SvgColor = styled.div<SvgProps>`
svg{

    border-radius: 50%;
    ${({ variant }) => `background-color: ${SvgVariants[variant as SvgVariant]};`}
    align-items: center;
    height: 1.3rem;
    padding: .3rem;
    margin-right: .4rem;
}






`
