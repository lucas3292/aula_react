import {  createContext,useState } from "react";

export const ContextTheme = createContext()

export const ProviderTheme = ({children})=>{
    const [theme, setTheme] = useState('light')
    const handleTheme =()=>{
        setTheme(theme === 'light'? "dark":"light");
    }
    return (
        <ContextTheme.Provider value={{theme, handleTheme}}>
            {children}
        </ContextTheme.Provider>
    )
}