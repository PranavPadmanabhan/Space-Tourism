import React, { useState } from "react";
import Drawer from "../drawer/Drawer";


export const NavbarContext = React.createContext();


function NavbarContextProvider(props) {

    const [drawerMode, setDrawerMode] = useState(false);

    function setDrawer(value){
        setDrawerMode(value)
    }

    const value = {drawerMode,setDrawer}

  return (
      <NavbarContext.Provider value={value}>
          {props.children}
      </NavbarContext.Provider>
  );
}

export default NavbarContextProvider;


export const DrawerContext = () => {
  return (
      <NavbarContext.Consumer>
          {
              value => (
                  value.drawerMode && (<Drawer />)
              )
          }
      </NavbarContext.Consumer>
  );
}

