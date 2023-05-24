import { useContext, useState } from "react"
import { darkThemeIcon, lightThemeIcon } from "./icons"
import { ThemeContext } from "../context/ThemeContext"
// Isletim Sisteminin Tema Bilgisini Almak Icin:
// https://medium.com/hypersphere-codes/detecting-system-theme-in-javascript-css-react-f6b961916d48
// https://getbootstrap.com/docs/5.3/customize/color-modes/#javascript



export default function ThemeIcon(props) {
  const { themeName, handleTheme } = useContext(ThemeContext)

  // ThemeContext icine Alindi..
  // function handleTheme() {
  //   setThemeName(prev => {
  //     const themeInfo = prev === "light" ? "dark" : "light"
  //     document.documentElement.setAttribute('data-bs-theme', themeInfo)
  //     return themeInfo
  //   })

  //   // if (theme === "light") {
  //   //   document.documentElement.setAttribute('data-bs-theme', 'dark')
  //   //   setTheme("dark")
  //   // } else {
  //   //   document.documentElement.setAttribute('data-bs-theme', 'light')
  //   //   setTheme("light")
  //   // }
  // }

  return <>
    {themeName === "light" ? <button onClick={handleTheme} className="btn">{lightThemeIcon} Light</button> : <button className="btn" onClick={handleTheme}>{darkThemeIcon} Dark</button>}
  </>
}