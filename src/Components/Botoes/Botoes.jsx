import React from "react";
import { IconeBotao, TituloBotao, Container } from "./style";
export default class Botoes extends React.Component {

    setarPagina = pagina => {
        this.props.pagina(pagina)
        window.scrollTo(0, 0)
    }

    render(){

        return(
            <Container corTitulo={this.props.corTitulo} onClick={() => this.setarPagina(this.props.nome)}>
                <IconeBotao src={this.props.icone} alt={this.props.nome} fill="white"/>
                <TituloBotao>{this.props.nome}</TituloBotao>
            </Container>
        )
    }
}