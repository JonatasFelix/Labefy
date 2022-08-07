import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid #666666;
    margin-top: 32px;
`

export const BoxRecomendados = styled.div`
    display: flex;
    color: white;
    opacity: ${props => props.idPlaylist ? 1 : 0.6};
    margin: 6px 0 0 25px;
    cursor: pointer;
    &:hover {
        transition-duration: 1s;
        opacity: 1;
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




