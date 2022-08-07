import styled from "styled-components";

  const gerar_cor = (opacidade = 1) => {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
 
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
 }

export const Aplicacao = styled.div`
    display: flex;
`

export const ContainerLateral = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: start;
    max-width: 300px;
    min-width: 220px;
    width: 70%;
    background-color: black;
    min-height: 100vh;
    border-right: 1px solid #1a1a1a;
    @media(max-width: 771px){
        display: none;
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 6px;
`

export const IconeLogo = styled.img`

    @keyframes App-logo-spin {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
    width: 75px;
    animation: App-logo-spin infinite 20s linear;

`

export const TituloLogo = styled.img`
    width: 90px;
    height: 27px;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 82%;
    min-height: 100vh;
    background: linear-gradient(0deg, rgba(15,15,15,1) 55%, ${gerar_cor()});

    .carrosel-marg-btn{
        margin-bottom: 50px;
    }

    @media(max-width: 771px){
        width: 100%;
        padding-bottom: 72px;
    }
    
`

export const MenuMobile = styled.nav`
    display: none;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    background: linear-gradient(0deg, rgba(0,0,0,1) 32%, rgba(0,0,0,0.5018382352941176) 100%);

    @media(max-width: 771px){
       display: flex;
       justify-content: space-around;
       align-items: center;
    }
`



  