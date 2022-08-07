import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ImagemLoader = styled.div`
    width: 4rem;
    height: 4rem;
    margin: 4rem;
    border-radius: 50%;
    border: 0.7rem solid rgb(187 187 187 / 30%);
    border-top-color: white;
    animation: 1.5s spin infinite linear;
    border-bottom-color: white;

    @keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
`

export const CarregandoP = styled.p`
    color: white;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: -56px;
`