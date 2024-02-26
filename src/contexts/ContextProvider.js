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
    const [isClicked, setisClicked] = useState(initialState);

    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");

    const [themeSettings, setThemeSettings] = useState(false);

    const setMode=(e)=>{
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor=(color)=>{
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }

    const handleClick=(clicked)=>{
        setisClicked({ ...initialState, [clicked]: true});
    }

    const [screenSize, setscreenSize] = useState(undefined)

    return(
        <StateContext.Provider
           value={{
            activeMenu,
            setactiveMenu,
            isClicked,
            setisClicked,
            handleClick,
            screenSize,
            setscreenSize,
            currentColor,
            currentMode,
            themeSettings, 
            setThemeSettings,
            setColor,
            setMode
           }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext);