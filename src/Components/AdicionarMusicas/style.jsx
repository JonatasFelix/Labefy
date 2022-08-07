import styled from "styled-components";

export const Container = styled.div`
    background-color: #808080a1;
    display: flex;
    padding: 8px 0;
    margin-bottom: 20px;
	animation: scale-up-hor-left 0.8s cubic-bezier(0, 0.42, 0.5, 1.1) both;

    @keyframes scale-up-hor-left {
        0% {
                    transform: scaleX(0.4);
                    transform-origin: 0% 0%;
        }
        100% {
                    transform: scaleX(1);
                    transform-origin: 0% 0%;
        }
    }



    form{
        display: flex;
        align-items: flex-end;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        text-align: center;
    }

    .BoxInput{
        display: flex;
        flex-direction: column;
        width: 25%;
        margin: 0 8px;
    }

    #InputNome, #InputUrl, #InputArtista {
        display: flex;
        align-items: center;
        width: 100%;
        background: white;
        border-radius: 8px;
        padding: 1px 5px;
    }

    img {
        width: 25px;
    }

    input {
        border: none;
        width: 100%;
        height: 95%;
        border-radius: 8px;
    }

    input:focus{
        box-shadow: 0 0 0 0;
        outline: 0
    }

    button{
        height: 28px;
        margin: 12px 8px 0;
        border-radius: 8px;
        border: none;
        padding: 0 22px;
        cursor: pointer;
    }

`