import React from "react";
import axios from "axios";
import { Container, BoxLista, BoxRecomendados, BlocoPlayer, NomePlayList, PlayImg, ParagrafoPlaylist, BoxPlay, BoxTopo, BuscaEAdd, Lista, InputBusca } from "./style";
import Musica from "../../img/notas-musicais.png"
import IconeBuscarBranco from "../../img/icone-buscar-branco.svg"
import Adicionar from "../../img/adicionar.svg"
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";


export default class PaginaBiblioteca extends React.Component {

    state = {
        playlists: [],
        player: false,
        loading: true,
        buscar: false,
        inputBusca: "",
    }

    componentDidMount() {
        this.getPlayLists()
    }

    abrirBusca = () => {
        this.setState({ buscar: !this.state.buscar })
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

    deletarPlaylist = (id, nome) => {
        if (nome === "Rock" || nome === "MPB" || nome === "Pop" || nome === "Eletronica" || nome === "Sertanejo" || nome === "Reggae") {
            Swal.fire({
                title: 'Grrrrrrrrrr!',
                text: 'Apague apenas playlists criadas por você.',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEd9PcLMSKndYQhREagqUY6z4WRS0vaYgNUA&usqp=CAU',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
                confirmButtonColor: '#d73737',
            })
        } else {

            Swal.fire({
                title: `Deseja mesmo deletar ${nome}?`,
                text: "Você não será capaz de reverter isso!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sim, exclua!',
                cancelButtonText: 'Não, cancelar!',
                cancelButtonColor: '#D73743',
                confirmButtonColor: '#52d737',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {

                    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
                        headers: {
                            Authorization: "jonatas-felix-freire"
                        }
                    }).then(response => {
                        Swal.fire(
                            'Deletado!',
                            'Musica deletada com sucesso',
                            'success'
                        )
                        this.getPlayLists()
                        this.props.atualizarListas()
                    }).catch(error => {
                        Swal.fire(
                        'Ooopps!',
                        error.message,
                        'Error'
                        )
                    })

                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    Swal.fire(
                        'Cancelado',
                        'Sua Playlist esta segura :)',
                        'error'
                    )
                }
            })

        }
    }

    pegarInputBusca = (e) => {
        this.setState({ inputBusca: e.target.value })
    }

    render() {
        const renderizarRecomendadas = this.state.playlists
            .filter(playlist => {
                return (
                    playlist.name.toLowerCase().includes(this.state.inputBusca.toLowerCase())
                )
            })
            .map(o => {
                return (
                    <BoxPlay key={o.id}>
                        <BoxRecomendados key={o.id} onClick={() => this.paginaDaPlaylist(o.id, o.name)}>
                            <BlocoPlayer cor={this.generateColor}><PlayImg src={Musica} alt="Play" /></BlocoPlayer>
                            <NomePlayList>{o.name}</NomePlayList>
                        </BoxRecomendados>
                        <button onClick={() => this.deletarPlaylist(o.id, o.name)}>DELETAR</button>
                    </BoxPlay>
                )
            })
        return (
            <Container>
                <BoxTopo>
                    <ParagrafoPlaylist buscar={this.state.buscar}>Playlists</ParagrafoPlaylist>
                    <BuscaEAdd buscar={this.state.buscar}>
                        {this.state.buscar && <InputBusca
                            value={this.state.inputBusca}
                            onChange={this.pegarInputBusca}
                            type="text"
                            placeholder="Procurar Playlist..."
                        />}
                        <img onClick={this.abrirBusca} src={IconeBuscarBranco} alt="Buscar" />
                        <img onClick={() => this.props.pagina("Criar")} src={Adicionar} alt="Adicionar" />
                    </BuscaEAdd>
                </BoxTopo>
                <Lista>
                    <BoxLista inicio={this.props.inicio}>
                        {this.state.loading ? <Loader /> : ""}
                        {renderizarRecomendadas}
                    </BoxLista>
                </Lista>
            </Container>
        )
    }
}