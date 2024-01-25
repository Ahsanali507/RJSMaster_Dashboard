import React, {createContext, useContext, useState} from 'react'

const StateContext=createContext();
const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider=({children})=>{
    const [activeMenu, setactiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState)
    return(
        <StateContext.Provider
           value={{
            activeMenu,
            setactiveMenu,
            isClicked,
            setisClicked,
           }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext);