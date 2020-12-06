import React, { useState, createContext } from 'react';

export const MenuContext = createContext();

export const MenuProvider = (props) => {

    const [ fullMenu, setFullMenu ] = useState([
        []
    ])

    return (
        <MenuContext.Provider value={[fullMenu,setFullMenu]}>
            {props.children}
        </MenuContext.Provider>
    );
  

}