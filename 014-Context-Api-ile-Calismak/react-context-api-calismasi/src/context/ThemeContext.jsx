import { createContext, useState } from 'react';


const ThemeContext = createContext();

function ThemeContextProvider({children}) {
  const [themeName, setThemeName] = useState("light")

  function handleTheme() {
    setThemeName(prev => {
      const themeInfo = prev === "light" ? "dark" : "light"
      document.documentElement.setAttribute('data-bs-theme', themeInfo)
      return themeInfo
    })
  }
  
  return <ThemeContext.Provider value={{themeName, handleTheme}}>
    {children}
  </ThemeContext.Provider>
}

export {ThemeContextProvider, ThemeContext}