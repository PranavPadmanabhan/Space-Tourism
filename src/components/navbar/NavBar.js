import React, { useContext, useEffect, useState } from 'react';
import './NavBar.css'
import { Link, useLocation } from "react-router-dom";
import hamBurger from '../../assets/shared/icon-hamburger.png'
import {NavbarContext} from './NavbarContext';


const logo = require('../../assets/shared/logo.png')


function NavBar() {

    const {drawerMode , setDrawer} = useContext(NavbarContext)

    useEffect(() => {
      console.log(drawerMode);
    }, []);
    

    const location = useLocation();

    return (
        <div className='navbar'>
            <img className='logo' src={logo} />
            <div className='line' />
            <div className='option-container'>
                <Link to={"/"} className='option' style={{borderBottom:location.pathname == "/"?"solid 3px white":null}}>00 <span className='option-title'>HOME</span></Link>
                <Link to={"/destination"} className='option' style={{borderBottom:location.pathname == "/destination"?"solid 3px white":null}}>01 <span  className='option-title' >DESTINATION</span></Link>
                <Link to={"/crew"} className='option' style={{borderBottom:location.pathname == "/crew"?"solid 3px white":null}} >02 <span className='option-title'>CREW</span></Link>
                <Link to={"/technology"} className='option' style={{borderBottom:location.pathname == "/technology"?"solid 3px white":null}}>03 <span  className='option-title'>TECHNOLOGY</span></Link>
            </div>
           { !drawerMode && ( <img onClick={() => setDrawer(true)} className='hamburger' src={hamBurger}/>)}
           
        </div>
    )
}

export default NavBar;

