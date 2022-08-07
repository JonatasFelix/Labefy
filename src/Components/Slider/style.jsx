import styled from "styled-components";

export const Container = styled.div`
    .BoxCarousel{
        cursor: grab;
        user-select: none;

    }
    .BoxCarousel:active{
        cursor: grabbing;
    }
    
    .NomePlaylista{
        color: white;
        font-weight: bold;
        font-size: 1.6rem;
        margin: 30px 12px 10px;
    }

    .CarouselPersonalizacao{
        margin: 8px 0px;
    }
`

export const BoxVideo = styled.div`
    background: gray;
    padding: 12px;
    border-radius: 16px;
    text-align: center;
    cursor: grab;
    user-select: none;
    min-height: 240px;
    background: rgb(213 212 212 / 32%);
    box-shadow: 0px 0px 8px 1px #666666;
    margin: 0px 8px;
    &:hover{
        background: rgb(213 212 212 / 50%);
    }
    &:active{
        cursor: grabbing;
    }

    p{
        text-align: center;
        color: white;
        font-weight: bold;
    }
`
