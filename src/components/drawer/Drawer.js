import React, { useContext } from 'react';
import { NavbarContext } from '../navbar/NavbarContext';
import './Drawer.css';
import close from '../../assets/shared/icon-close.png'
import { Link, useLocation } from 'react-router-dom';



function Drawer() {
    const {drawerMode, setDrawer} = useContext(NavbarContext)
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className='drawer'>
            <img onClick={()=>setDrawer(false)} className='close' src={close}/>
            <div className="drawer-details">
                <Link onClick={()=> setDrawer(false)} to={'/'} className="drawer-items" style={{borderRight:location.pathname === "/"?"solid 10px white":null}}>00<span className="item-name">HOME</span></Link>
                <Link onClick={()=> setDrawer(false)} to={'/destination'} className="drawer-items" style={{borderRight:location.pathname === "/destination"?"solid 10px white":null}}>01<span className="item-name">DESTINATION</span></Link>
                <Link onClick={()=> setDrawer(false)} to={'/crew'} className="drawer-items" style={{borderRight:location.pathname === "/crew"?"solid 10px white":null}}>02<span className="item-name">CREW</span></Link>
                <Link onClick={()=> setDrawer(false)} to={'/technology'} className="drawer-items" style={{borderRight:location.pathname === "/technology"?"solid 10px white":null}}>03<span className="item-name">TECHNOLOGY</span></Link>
            </div>
        </div>
    );
}

export default Drawer;
