import React from "react";
import axios from "axios";
import { Container } from "./style";
import VideoUrl from "../../img/video.png"
import Artista from "../../img/artista.png"
import Musica from "../../img/notas-musicais.png"
import Swal from "sweetalert2";

export default class AdicionarMusicas extends React.Component {

    state = {
        inputName: "",
        inputArtista: "",
        inputUrl: "",
    }

    postMusicPlaylist = () => {
        const body = {
            name: this.state.inputName,
            artist: this.state.inputArtista,
            url: this.state.inputUrl,
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, body, {
            headers: {
                Authorization: "jonatas-felix-freire"
            }
        }).then(response => {
            Swal.fire(
                'Tudo Certo!',
                'Sua musica foi adicionada.',
                'success',
            )
        }).catch(error => {
            Swal.fire(
                'Ooopps!',
                error.message,
                'Error'
            )
        })
    }

    pegarNome = (e) => {
        this.setState({ inputName: e.target.value })
    }

    pegarArtita = (e) => {
        this.setState({ inputArtista: e.target.value })
    }

    pegarUrl = (e) => {
        this.setState({ inputUrl: e.target.value })
    }

    adicionarMusica = (e) => {
        e.preventDefault()
        this.postMusicPlaylist()
        this.setState({ inputUrl: "" })
        this.setState({ inputArtista: "" })
        this.setState({ inputName: "" })
        this.props.atualizarAoAdicionarM()
        this.props.atualizarAoAdicionarM()
        this.props.atualizarAoAdicionarM()
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.adicionarMusica}>
                    <div className="BoxInput">
                        <label htmlFor="nome">Nome da Musica:</label>
                        <div id="InputNome">
                            <img src={Musica} alt="Notas de Musica" />
                            <input name="nome" type="text" id="name"
                                value={this.state.inputName}
                                onChange={this.pegarNome}
                            />
                        </div>
                    </div>
                    <div className="BoxInput">
                        <label htmlFor="artista">Nome do Artista:</label>
                        <div id="InputArtista">
                            <img src={Artista} alt="Artista" />
                            <input name="artista" type="text" id="artista"
                                value={this.state.inputArtista}
                                onChange={this.pegarArtita}
                            />
                        </div>
                    </div>
                    <div className="BoxInput">
                        <label htmlFor="url">Link do Youtube</label>
                        <div id="InputUrl">
                            <img src={VideoUrl} alt="Video" />
                            <input name="url" type="text" id="url"
                                value={this.state.inputUrl}
                                onChange={this.pegarUrl}
                            />
                        </div>
                    </div>
                    <button>Adicionar</button>
                </form>
            </Container>
        )
    }
}