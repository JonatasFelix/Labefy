import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;

`

export const BoxTopo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const BuscaEAdd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: black;
    border-radius: 8px;
    height: 45px;
    width: ${props => props.buscar ? "100%" : "150px"};
    margin: ${props => props.buscar ? "30px 12px" : "0px 12px 0 0"};

    img{
        width: 30px;
        padding: 0 12px;
        cursor: pointer;
    }

`

export const Lista = styled.div`
    display: flex;
`

export const BoxLista = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 12px;

    @media(max-width: 770px){
        flex-direction: column;
        align-items: start;
    }

`

export const PlayImg = styled.img`
    width: 60%;
`

export const InputBusca = styled.input`
    width: 55%;
    height: 60%;
    border-radius: 7px;
    border: none;
    padding: 0 6px;
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

    @media(min-width: 771px){
        flex-direction: column;
        padding: 10px;
        height: 249px;
        width: 200px;
    }

    @media(max-width: 771px){
        flex-direction: row;
        padding: 10px;
        width: 100%;
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

    @media(min-width: 771px){
        width: 172px;
        height: 172px;
        margin: 12px 0;
        border-radius: 8px;
        box-shadow:  0px 0px 11px 0px #000000, 0px 0px 29px 1px rgb(0 0 0 / 7%);
    }
`

export const NomePlayList = styled.p`
    margin: 0;
    margin-left: 16px;

    @media(min-width: 771px){
        margin: 0;
    }

`

export const ParagrafoPlaylist = styled.p`
    display: ${props => props.buscar ? "none" : "block"};;
    color: white;
    font-weight: bold;
    font-size: 2.0rem;
    margin: 30px 12px;
    `



export const BoxPlay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button{
        width: 100px;
        padding: 10px 0;
        font-weight: bold;
        margin: 8px 0px 12px;
        cursor: pointer;
        border-radius: 8px;
        background: rgb(213 212 212 / 60%);
    }

    @media(max-width: 770px){
        width: 100%;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;

        button{
            height: 92%;
            border-radius: 8px;
            border: none;
            margin-right: 4px;
        }

    }

`