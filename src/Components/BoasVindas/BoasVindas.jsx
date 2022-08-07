import React from "react";
import styled from "styled-components";
import { SaudacaoP } from "./style";

const Mensagem = styled.div`
    display: flex;
`

export default class BoasVindas extends React.Component {

    render() {
        const Saudacao = () => {
            let dateToday = new Date();
            let hr = dateToday.getHours();
            if (hr >= 0 && hr < 12) {
                return (
                    <SaudacaoP>Olá, Bom Dia.</SaudacaoP>

                )
            } else if (hr >= 12 && hr < 18) {
                return (
                    <SaudacaoP>Olá, Boa Tarde.</SaudacaoP>

                )
            } else {
                return (
                    <SaudacaoP>Olá, Boa Noite.</SaudacaoP>
                )
            }
        }
        return (
            <Mensagem>
                <Saudacao/>
            </Mensagem>
        )
    }
}