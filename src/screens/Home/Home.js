import './Home.css'
import React, { Component } from 'react';
import NavBar from '../../components/navbar/NavBar';

export class Home extends Component {
    render() {
        return (
            <div className='home'>
                <NavBar />
                <div className="content">
                    <div className="details">
                        <span className="text1">SO, YOU WANT TO TRAVEL TO</span>
                        <span className="text2">SPACE</span>
                        <p className="text3">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className="explore-button">
                        <span className="explore-text">EXPLORE</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
