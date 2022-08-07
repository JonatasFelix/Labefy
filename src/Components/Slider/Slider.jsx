import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { BoxVideo, Container } from "./style"


export default class Carrosel extends React.Component {

    state = {
        playlists: [],
        player: false,
        loading: true,
    }

    getPlayLists = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, {
            headers: {
                Authorization: "jonatas-felix-freire"
            }
        }).then(response => {
            this.setState({ playlists: response.data.result.tracks })
            this.setState({ loading: false })
        })
    }

    componentDidMount = () => {
        this.getPlayLists()
    }

    render() {
        const renderizarRecomendadas = this.state.playlists.map(o => {
            const link = `${o.url.substring(32)}`
            return (
                <BoxVideo key={o.id}>
                    <div>
                        <iframe title={o.name} width="100%" height="100%"
                            src={`https://www.youtube.com/embed/${link}`}>
                        </iframe>
                    </div>
                    <p>{o.artist} - {o.name}</p>
                </BoxVideo>
            )
        })

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3.3,
                slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2.3,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1.2,
                slidesToSlide: 1 // optional, default to 1.
            }
        };




        return (
            <Container>
                <p className="NomePlaylista">Playlist: {this.props.nome}</p>
                <div className="BoxCarousel">
                    <Carousel
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        itemClass="CarouselPersonalizacao"
                    >
                        {renderizarRecomendadas}
                    </Carousel>
                </div>
            </Container>
        )
    }
}