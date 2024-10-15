import  {useEffect, useState} from "react";
import {ThemeContext} from "./theme-context";

const THEME_TYPE = {
    light: 'light',
    dark: 'dark'
}

const ThemeProvider = (props:any ) => {
    const localStorageDark = localStorage.getItem('dark-mode');
    const [isDark, setIsDark] = useState(localStorageDark === THEME_TYPE.dark)

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    const darkTheme = () => {
        setIsDark(true)
    }

    const lightTheme = () => {
        setIsDark(false)
    }

    useEffect(() => {
        localStorage.setItem('dark-mode', isDark ? THEME_TYPE.dark : THEME_TYPE.light);
    }, [isDark])

    return <ThemeContext.Provider value={{isDark, darkTheme, lightTheme, toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
}

export default ThemeProvider
