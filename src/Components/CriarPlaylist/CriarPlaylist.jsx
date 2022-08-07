import axios from "axios";
import React from "react";
import { Container, ParagrafoReco } from "./style";
import Playlist from "../../img/add-list.png"
import PlaylistRecomendada from "../PlaylistRecomendada/PlaylistRecomendada";
import Swal from "sweetalert2";


export default class CriarPlaylist extends React.Component {

    state = {
        inputNome: "",
    }

    pegarNome = (e) => {
        this.setState({ inputNome: e.target.value })
    }

    createPlaylist = (e) => {
        e.preventDefault()

        this.props.atualizarListas()

        const body = {
            name: this.state.inputNome,
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "jonatas-felix-freire"
            }
        }).then(response => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sua Playlist foi criada',
                showConfirmButton: true,
                timer: 2000,
                confirmButtonColor: '#11e211',
              })
        }).catch(error => {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: error.message,
                showConfirmButton: true,
                timer: 2000,
                confirmButtonColor: '#e21111',
              })
        })

    }

    render() {
        return (
            <div>
                <Container>
                    <p>Criar Playlist</p>
                    <div>
                        <img src={Playlist} alt="" />
                        <form onSubmit={this.createPlaylist}>
                            <input type="text"
                                placeholder="Summer Eletro Hits...."
                                value={this.state.inputNome}
                                onChange={this.pegarNome}
                            />
                            <button>Criar</button>
                        </form>
                    </div>
                </Container>
                <ParagrafoReco>Playlists Recomendadas</ParagrafoReco>
                <PlaylistRecomendada capturarID={this.props.capturarID}/>
            </div>
        )
    }
}