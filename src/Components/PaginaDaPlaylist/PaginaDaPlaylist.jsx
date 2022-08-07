import React from "react";
import axios from "axios";
import { Container, BoxRecomendados, BlocoPlayer, NomePlayList, ContainerVideos, NomePlayP, ListaVazia, ListaVaziaImg, BoxListaVazia, BoxInfos, ContainerMusicas } from "./style";
import Loader from "../Loader/Loader";
import ImgVazio from "../../img/empty.png"
import { BsPlusSquareFill } from "react-icons/bs"
import AdicionarMusicas from "../AdicionarMusicas/AdicionarMusicas";
import Swal from 'sweetalert2'


export default class PaginaDaPlaylist extends React.Component {

    state = {
        playlists: [],
        loading: true,
        boxMusic: false,
    }

    componentDidMount() {
        this.getPlayLists()
    }

    atualizarAoAdicionar = () => {
        this.getPlayLists()
    }

    getPlayLists = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`, {
            headers: {
                Authorization: "jonatas-felix-freire"
            }
        }).then(response => {
            this.setState({ playlists: response.data.result.tracks })
            this.setState({ loading: false })
        })
    }

    deleteMusic = (id, nome) => {

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

                axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks/${id}`, {
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
                    'Sua musica esta segura :)',
                    'error'
                )
            }
        })
    }

    abrirBoxAdiconarMusica = () => {
        this.setState({ boxMusic: !this.state.boxMusic })
    }

    render() {
        const renderizarRecomendadas = this.state.playlists.map(o => {
            const link = `${o.url.substring(32)}`
            return (
                <ContainerMusicas key={o.id}>
                    <BoxRecomendados>
                        <BlocoPlayer>
                            <iframe title={o.name} width="100%" height="100%"
                                src={`https://www.youtube.com/embed/${link}`}>
                            </iframe>
                        </BlocoPlayer>
                        <NomePlayList>{o.artist} - {o.name}</NomePlayList>
                    </BoxRecomendados>
                    <button onClick={() => this.deleteMusic(o.id, o.name)}>Deletar</button>
                </ContainerMusicas>
            )
        })
        return (

            <Container>
                <BoxInfos>
                    <NomePlayP>Playlist: {this.props.nomePlaylist}</NomePlayP>
                    <div onClick={this.abrirBoxAdiconarMusica} className="btnAdicionarLista"><BsPlusSquareFill /><p>Adicionar Musica</p></div>
                </BoxInfos>
                {this.state.boxMusic && <AdicionarMusicas id={this.props.idPlaylist} atualizarAoAdicionarM={this.atualizarAoAdicionar} />}
                <ContainerVideos>
                    {this.state.loading ? <Loader /> : ""}
                    {renderizarRecomendadas.length === 0 && !this.state.loading ?
                        <BoxListaVazia>
                            <ListaVaziaImg src={ImgVazio} alt="Caixa Vazia" />
                            <ListaVazia>Lista Vazia</ListaVazia>
                        </BoxListaVazia>
                        : renderizarRecomendadas}
                </ContainerVideos>
            </Container>
        )
    }
}
