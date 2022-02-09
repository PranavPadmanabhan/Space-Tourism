import React, { Component } from 'react'
import NavBar from '../../components/navbar/NavBar'
import { DrawerContext } from '../../components/navbar/NavbarContext'
import './Crew.css'
import { data, Douglas, Anousheh, Mark, victor } from '../../constants/constants'
import img from '../../assets/crew/image-victor-glover.png'

export class Crew extends Component {
    constructor(props) {
        super(props)

        this.state = {
            crew: data.crew[0],
            currentIndex: 0
        }
    }

    componentDidMount() {
        this.autoScroll();
    }

    autoScroll = () => {
        setInterval(() => {
            if (this.state.currentIndex == data.crew.length - 1) {
                this.setState({ currentIndex: 0, crew: data.crew[this.state.currentIndex] })
            }
            else {
                this.setState({
                    currentIndex: this.state.currentIndex + 1,
                    crew: data.crew[this.state.currentIndex]
                })
            }
        }, 3000);
    }

    renderImages = (name) => {
        switch (name) {
            case "Douglas Hurley": return Douglas;
            case "Anousheh Ansari": return Anousheh;
            case "Mark Shuttleworth": return Mark;
            case "Victor Glover": return victor;
            default: return Douglas

        }
    }

    render() {
        return (
            <div className='crew'>
                <NavBar />
                <DrawerContext />
                <div className="crew-content">
                    <div className="crew-details" onScroll={(event) => console.log(event.currentTarget)}>
                        <span className="crew-page-title">02 <span className="crew-title">MEET YOUR CREW</span></span>
                        {
                            window.innerWidth < 600 && (<img src={this.renderImages(this.state.crew.name)} className='crew-image' /> )
                        }
                        {
                            window.innerWidth < 600 && (
                                <div className="dots-container">
                                    {
                                        data.crew.map((item, index) => (
                                            <div style={{ backgroundColor: item == this.state.crew ? "white" : "rgb(136, 136, 136)" }} onClick={() => this.setState({ crew: item, currentIndex: index })} className="dot"></div>
                                        ))
                                    }
                                </div>
                            )
                        }
                        <div className="details-container">
                            <span className="position">{this.state.crew.role.toUpperCase()}</span>
                            <span className="crew-name">{this.state.crew.name.toUpperCase()}</span>
                            <p className="crew-description">{this.state.crew.bio}</p>
                        </div>
                        {
                            window.innerWidth > 600 && (
                                <div className="dots-container">
                                    {
                                        data.crew.map((item, index) => (
                                            <div style={{ backgroundColor: item == this.state.crew ? "white" : "rgb(136, 136, 136)" }} onClick={() => this.setState({ crew: item, currentIndex: index })} className="dot"></div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                    {
                        window.innerWidth > 600 && (<img src={this.renderImages(this.state.crew.name)} className='crew-image' /> )
                    }
                </div>
            </div>
        )
    }
}

export default Crew