import styled from "styled-components";

export const Container = styled.div`

    margin-bottom:80px;

    p{
        color: white;
        font-weight: bold;
        font-size: 2.0rem;
        margin: 30px 12px;
    }

    div{
        display: flex;
        align-items: center;
        padding: 5px;
        background-color: white;
        width: 90%;
        height: 40px;
        margin: 0 auto;
        border-radius: 8px;
    }

    img{
        width: 30px;
    }

    form{
        width: 100%;
    }

    input{
        border: none;
        width: 75%;
        padding-left: 15px;
        height: 30px;
    }

    input:focus{
        box-shadow: 0 0 0 0;
        outline: 0
    }

    button{
        width: 20%;
        padding: 12px 5px;
        border-radius: 8px;
        cursor: pointer;
        border: none;
        background: black;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 6px;

    }

    button:hover{
        transition-duration: 0.9ms;
        transform: scale(1.1);
    }

    @media(max-width: 910px){

        div{
            width: 95%;
        }

        img{
            width: 20px;
        }

        input{
            width: 60%;
        }

        button{
            letter-spacing: 3px;
            width: 35%;
        }

    }

    @media(max-width: 381px){
        
        form{
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        input{
            width: 57%;
        }

    }

`

export const ParagrafoReco = styled.p`
    color: white;
    font-weight: bold;
    font-size: 1.6rem;
    margin: 30px 12px;
`