import logo from './logo.svg';
import logoTitulo from "../src/img/logo.png"
import { Aplicacao, IconeLogo, Header, TituloLogo, ContainerLateral, Main, MenuMobile } from "./style.jsx"
import Botoes from './Components/Botoes/Botoes';
import Carrosel from './Components/Slider/Slider';
import BoasVindas from './Components/BoasVindas/BoasVindas';
import React from 'react';
import IconeHomeBranco from "../src/img/icone-home-brancos.svg"
import IconeBuscarBranco from "../src/img/icone-buscar-branco.svg"
import Biblioteca from "../src/img/biblioteca.png"
import Adicionar from "../src/img/adicionar.svg"
import PlaylistRecomendada from './Components/PlaylistRecomendada/PlaylistRecomendada';
import PaginaDaPlaylist from './Components/PaginaDaPlaylist/PaginaDaPlaylist';
import PlaylistsNav from './Components/PlaylistsNav/PlaylistsNav';
import BuscarMusicas from './Components/BuscarMusicas/BuscarMusicas';
import CriarPlaylist from './Components/CriarPlaylist/CriarPlaylist';
import PaginaBiblioteca from './Components/PaginaBiblioteca/PaginaBiblioteca';



class App extends React.Component {
  state = {
    pagina: "Inicio",
    nomePlaylist: "",
    atualizarNav: false,
  }

  alterarPagina = (pagina) => {
    this.setState({ pagina: pagina })
  }

  pegarIdPlaylist = (id, nome) => {
    this.setState({ pagina: id })
    this.setState({ nomePlaylist: nome })
  }

  atualizarListas = () => {
    this.setState({ atualizarNav: !this.state.atualizarNav })
  }




  render() {

    const RenderizarMain = () => {
      switch (this.state.pagina) {
        case "Inicio":
          return (
            <Main>
              <BoasVindas />
              <PlaylistRecomendada capturarID={this.pegarIdPlaylist} inicio={this.state.pagina === "Inicio"} />
              <Carrosel id={"0e99b05c-0960-4190-90cb-b2825abb4fd9"} nome={"Rock"} />
              <Carrosel id={"28635935-7ded-4c2d-8158-a714896d7e12"} nome={"MPB"} className="carrosel-marg-btn" />
            </Main>
          )
        case "Buscar":
          return (
            <Main>
              <BuscarMusicas capturarID={this.pegarIdPlaylist} />
            </Main>
          )
        case "Criar":
          return (
            <Main>
              <CriarPlaylist atualizarListas={this.atualizarListas} capturarID={this.pegarIdPlaylist} />
            </Main>
          )
          case "Biblioteca":
            return (
              <Main>
                <PaginaBiblioteca pagina={this.alterarPagina} capturarID={this.pegarIdPlaylist} atualizarListas={this.atualizarListas}/>
              </Main>
            )
        default:
          return (
            <Main>
              <PaginaDaPlaylist idPlaylist={this.state.pagina} nomePlaylist={this.state.nomePlaylist} />
            </Main>
          )
      }
    }

    return (
      <Aplicacao className="App">
        <ContainerLateral>
          <Header className="App-header">
            <IconeLogo src={logo} alt="React" />
            <TituloLogo src={logoTitulo} alt="Labefy" />
          </Header>
          <Botoes
            icone={IconeHomeBranco}
            nome="Inicio"
            pagina={this.alterarPagina}
            corTitulo={this.state.pagina === "Inicio"}
          />
          <Botoes
            icone={IconeBuscarBranco}
            nome="Buscar"
            pagina={this.alterarPagina}
            corTitulo={this.state.pagina === "Buscar"}
          />
          <Botoes
            icone={Biblioteca}
            nome="Biblioteca"
            pagina={this.alterarPagina}
            corTitulo={this.state.pagina === "Biblioteca"}
          />
          <Botoes
            icone={Adicionar}
            nome="Criar"
            pagina={this.alterarPagina}
            corTitulo={this.state.pagina === "Criar"}
          />

          <PlaylistsNav
            capturarID={this.pegarIdPlaylist}
            idPlaylist={this.state.pagina}
            atualizarNav={this.state.atualizarNav}
            atualizarListas={this.atualizarListas} />
        </ContainerLateral>
        <RenderizarMain />

        <MenuMobile>
          <Botoes
            icone={IconeHomeBranco}
            nome="Inicio"
            pagina={this.alterarPagina}
            corTitulo={this.state.pagina === "Inicio"}
          />
          <Botoes
            icone={IconeBuscarBranco}
            nome="Buscar"
            pagina={this.alterarPagina}
            corTitulo={this.state.pagina === "Buscar"}
          />
          <Botoes
            icone={Biblioteca}
            nome="Biblioteca"
            pagina={this.alterarPagina}
            corTitulo={this.state.pagina === "Biblioteca"}
          />
        </MenuMobile>

      </Aplicacao>
    );
  }
}
export default App;
