import React from 'react';
import './NavBar.css'
import { useLocation } from "react-router-dom";

const logo = require('../../assets/shared/logo.png')


function NavBar() {

    const location = useLocation();

    return (
        <div className='navbar'>
            <img src={logo} />
            <div className='line' />
            <ul className='option-container'>
                <li style={{borderBottom:location.pathname == "/"?"solid 3px white":null}}>00 <span className='option-title'>HOME</span></li>
                <li>01 <span style={{borderBottom:location.pathname == "/destination"?"solid 3px white":null}} className='option-title' >DESTINATION</span></li>
                <li>02 <span style={{borderBottom:location.pathname == "/crew"?"solid 3px white":null}} className='option-title'>CREW</span></li>
                <li>03 <span style={{borderBottom:location.pathname == "/technology"?"solid 3px white":null}} className='option-title'>TECHNOLOGY</span></li>
            </ul>
        </div>
    )
}

export default NavBar;

