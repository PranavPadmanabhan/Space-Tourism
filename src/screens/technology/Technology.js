import React, { Component } from 'react'
import NavBar from '../../components/navbar/NavBar'
import { DrawerContext } from '../../components/navbar/NavbarContext'
import './Technology.css'
import {Launch,LaunchLandscape,Capsule,CapsuleLandscape,Spaceport,SpaceportLandscape, data} from '../../constants/constants'


export class Technology extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         tech:data.technology[0],
         currentIndex:0
      }
    }

    componentDidMount() {
        this.autoScroll();
    }

    autoScroll = () => {
        setInterval(() => {
            if (this.state.currentIndex == data.technology.length - 1) {
                this.setState({ currentIndex: 0, tech: data.technology[this.state.currentIndex] })
            }
            else {
                this.setState({
                    currentIndex: this.state.currentIndex + 1,
                    tech: data.technology[this.state.currentIndex]
                })
            }
        }, 3000);
    }


    renderImages = (name) => {
        switch (name) {
            case "Launch vehicle":
                return {
                    portrait:Launch,
                    Landscape:LaunchLandscape
                } 
            case "Spaceport":
                return {
                    portrait:Spaceport,
                    Landscape:SpaceportLandscape
                }
            case "Space capsule":
                return {
                    portrait:Capsule,
                    Landscape:CapsuleLandscape
                }                    
            default:
                
        }
    }

    render() {
        return (
            <div className='technology'>
                <NavBar />
                <DrawerContext />
                <div className="technology-content">
                    <span className="tech-title">03 <span className="tech-title-text">SPACE LAUNCH 101</span></span>
                    <div className="technology-detailsContainer">
                        {window.innerWidth > 600 ? (
                            <div className="first-col">
                               {
                                   data.technology.map((item,index) => (
                                     <div style={{backgroundColor:this.state.tech == item ? "white":"transparent",color:this.state.tech == item ? "black":"white"}} onClick={() => this.setState({tech:item,currentIndex:index})} key={index} className="index">
                                        {index + 1}
                                     </div>
                                   ))
                               }
                            </div>) : (<img src={this.renderImages(this.state.tech.name).Landscape} alt="" className='technology-image' />)}
                            {
                                window.innerWidth < 600 && (
                                    <div className="first-col">
                                        {
                                   data.technology.map((item,index) => (
                                     <div style={{backgroundColor:this.state.tech == item ? "white":"transparent",color:this.state.tech == item ? "black":"white"}} onClick={() => this.setState({tech:item,currentIndex:index})} key={index} className="index">
                                        {index + 1}
                                     </div>
                                   ))
                               }
                                    </div>)
                            }
                        <div className="second-col">
                            <span className="tech-heading">THE TECHNOLOGY..</span>
                            <span className="tech-name">{this.state.tech.name.toUpperCase()}</span>
                            <p className="tech-description">{this.state.tech.description}</p>
                        </div>
                        {window.innerWidth > 600 && (<img src={this.renderImages(this.state.tech.name).portrait} alt="" className='technology-image' />) }
                    </div>
                </div>
            </div>
        )
    }
}

export default Technology