import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContainerMusicas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button{
        padding: 10px 22px;
        font-weight: bold;
        margin: 8px 0px 12px;
        cursor: pointer;
        border-radius: 8px;
        border: none;
        text-transform: uppercase;
        background: rgb(213 212 212 / 60%);
    }

    @media(max-width: 771px){
        width: 50%;
        height: 305px;
    }

`

export const NomePlayP = styled.p`
    color: white;
    font-weight: bold;
    font-size: 2.0rem;
    margin: 30px 12px;
`

export const ContainerVideos = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`


export const PlayImg = styled.img`
    width: 60%;
    opacity: 0%;

`

export const BoxRecomendados = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 88%;
    height: 220px;
    margin: 1%;
    color: white;
    font-weight: bold;
    background: rgb(213 212 212 / 32%);
    border-radius: 5px;
    transition-duration: 1s;
    padding: 10px;
    min-width: 175px;
    &:hover {
        transition-duration: 1s;
        background: rgb(213 212 212 / 50%);
        ${PlayImg}{
            transition-duration: 1s;
            opacity: 60%;
        }
    }

    @media(max-width: 450px){
        min-width: 150px;
    }

    @media(max-width: 355px){
        width: 90%;
    }

`

export const BlocoPlayer = styled.div`
    height: 70%;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`

export const NomePlayList = styled.p`
    margin: 0;
    margin-top: 20px;
    text-align: center;

`

export const BoxListaVazia= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ListaVaziaImg = styled.img`
    width: 50px;
`


export const ListaVazia = styled.p`
    color: white;
    font-size: 2rem;
    font-weight: 500;
    margin-top: 10px;
`

export const BoxInfos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;


    .btnAdicionarLista{
        display: flex;
        margin: 0 12px;
        align-items: center;
        background: white;
        border-radius: 12px;
        padding: 0 31px;
        cursor: pointer;
    }
    
    p{
        font-weight: bold;
        margin-left: 8px;
    }
`



