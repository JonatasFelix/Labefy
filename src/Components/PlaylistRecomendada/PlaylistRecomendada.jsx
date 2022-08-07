import React from "react";
import axios from "axios";
import { Container, BoxRecomendados, BlocoPlayer, NomePlayList, PlayImg } from "./style";
import IconPlay from "../../img/play-button.png"
import Loader from "../Loader/Loader";


export default class PlaylistRecomendada extends React.Component {

    state = {
        playlists: [],
        player: false,
        loading: true,
    }

    componentDidMount() {
        this.getPlayLists()
    }

    getPlayLists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "jonatas-felix-freire"
            }
        }).then(response => {
            this.setState({ playlists: response.data.result.list })
            this.setState({ loading: false })
        })
    }

    generateColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;

    }

    paginaDaPlaylist = (id, nome) => {
        this.props.capturarID(id, nome)
    }

    render() {
        const renderizarRecomendadas = this.state.playlists
            .slice(0, 6)
            .map(o => {
                return (
                        <BoxRecomendados key={o.id} onClick={() => this.paginaDaPlaylist(o.id, o.name)}>
                            <BlocoPlayer cor={this.generateColor}><PlayImg src={IconPlay} alt="Play" /></BlocoPlayer>
                            <NomePlayList>{o.name}</NomePlayList>
                        </BoxRecomendados>
                )
            })
        return (

            <Container inicio={this.props.inicio}>
                {this.state.loading ? <Loader /> : ""}
                {renderizarRecomendadas}
            </Container>
        )
    }
}