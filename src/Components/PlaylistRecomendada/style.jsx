import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.inicio && "center"};
`

export const PlayImg = styled.img`
    width: 60%;
    opacity: 0%;

`

export const BoxRecomendados = styled.div`
    display: flex;
    align-items: center;
    width: 30%;
    height: 80px;
    margin: 1%;
    color: white;
    font-weight: bold;
    background: rgb(213 212 212 / 32%);
    border-radius: 5px;
    transition-duration: 1s;
    cursor: pointer;
    &:hover {
        transition-duration: 1s;
        background: rgb(213 212 212 / 50%);
        ${PlayImg}{
            transition-duration: 1s;
            opacity: 60%;
        }
    }

    @media(max-width: 600px){
        width: 48%;
    }
`

export const BlocoPlayer = styled.div`
    background-color: ${props => props.cor};
    height: 100%;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px 0 0 5px;
`

export const NomePlayList = styled.p`
    margin: 0;
    margin-left: 16px;
`




