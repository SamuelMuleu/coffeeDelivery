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

    h2 {
        color: #C47F17;
    }

    img {
        margin-top: 6rem;
        max-width: 100%; /* Responsivo para não exceder a tela */
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;

        img {
     
            width: 80%; /* Reduz o tamanho da imagem em mobile */
        }
    
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 32rem;
    min-height: 14rem;

    @media (max-width: 768px) {
        min-width: 100%;
        padding: 1rem;
    
    }
`;

export const BorderContainer = styled.div`
    border: 1px solid transparent;
    max-height: 16rem;
    min-width: 32rem;
    border-radius: 20px;
    border-image: linear-gradient(to right, red, yellow, green);
    border-image-slice: 1;
    padding: 2rem;
    align-items: flex-start;

    div {
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }

    @media (max-width: 768px) {
        min-width: 90%; 
        padding: 1rem;
        margin: 0 auto;
        div {
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const SvgColor = styled.div<SvgProps>`
    svg {
        border-radius: 50%;
        ${({ variant }) => `background-color: ${SvgVariants[variant as SvgVariant]};`}
        align-items: center;
        height: 1.2rem;
        padding: 0.3rem;
        margin-right: 0.7rem;
        margin-top: 1rem;
    }
`;

export const StatusContainer = styled.div`
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        place-items: inherit;
    }

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
     
    }


`;
export const PaymentText = styled.p`
    font-weight: bold;
    position: absolute;
    left: 9rem;
    top: 25rem;

    @media (max-width: 768px) {
        left: 5rem;  
        top: 20rem; 
    }

    @media (max-width: 480px) {
  left: 8.5rem;
  top: 34rem;
    }
`;

