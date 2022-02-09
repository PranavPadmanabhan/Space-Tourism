import React, { Component } from 'react';
import './Destination.css'
import NavBar from '../../components/navbar/NavBar'
import { DrawerContext } from '../../components/navbar/NavbarContext';
import {data, Moon,Mars,Europa,Titan} from '../../constants/constants'

export class Destination extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       destination:data.destinations[0],
    }
  }

   renderImages = (name) => {
      switch (name) {
        case "Moon": return Moon;
        case "Mars": return Mars;
        case "Europa": return Europa;
        case "Titan": return Titan;
        default: return Moon

      }
   }

  render() {

    return (
       <div className='destination'>
           <NavBar />
           <DrawerContext />
           <div className="destination-content">
             <div className="Image-container">
                <span className="page-title">01 <span className="title-text">PICK YOUR DESTINATION</span></span>
                <img src={this.renderImages(this.state.destination.name)} alt="" className="destination-image" />
             </div>
             <div className="destination-details-container">
              <div className="top-bar">
                {
                  data.destinations.map(item => (
                    <span style={{borderBottom:item === this.state.destination?"2px solid white":null}} onClick={()=> this.setState({destination:item})} className="top-bar-item">{item.name}</span>
                  ))
                }
              </div>
              <span className="destination-name">{this.state.destination.name}</span>
              <p className="description">{this.state.destination.description}</p>
              <div className="horizontal-line" />
              <div className="range-container">
                <div className="distance-container">
                  <span className="heading">AVG. DISTANCE</span>
                  <span className="distance">{this.state.destination.distance}</span>
                </div>
                <div className="time-container">
                  <span className="heading-time">EST. TRAVEL TIME</span>
                  <span className="time">{this.state.destination.travel}</span>
                </div>
              </div>
             </div>
           </div>
           
       </div>
    );
  }
}

export default Destination;
