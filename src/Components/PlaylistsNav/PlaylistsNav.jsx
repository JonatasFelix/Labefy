import React from "react";
import axios from "axios";
import { Container, BoxRecomendados, NomePlayList} from "./style";
import Loader from "../Loader/Loader";

export default class PlaylistsNav extends React.Component {

    state = {
        playlists: [],
        player: false,
        loading: true,
    }

    componentDidMount() {
        this.getPlayLists()
    }

    componentDidUpdate() {
        if(this.props.atualizarNav){
            this.getPlayLists()
            this.getPlayLists()
            this.getPlayLists()
            this.props.atualizarListas()
        }
    }

    getPlayLists = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "jonatas-felix-freire"
            }
        }).then(response => {
            this.setState({ playlists: response.data.result.list })
            this.setState({loading: false})
        })
    }

      paginaDaPlaylist = (id, nome) => {
        this.props.capturarID(id, nome)
      }

    render() {
        const renderizarRecomendadas = this.state.playlists
            .map(o => {
                return (
                <BoxRecomendados idPlaylist={this.props.idPlaylist === o.id} key={o.id} onClick={() => this.paginaDaPlaylist(o.id, o.name)}>
                    <NomePlayList>{o.name}</NomePlayList>
                </BoxRecomendados>
                )
        })
        return (

            <Container>
                {this.state.loading ? <Loader/> : ""}
                {renderizarRecomendadas}
            </Container>
        )
    }
}