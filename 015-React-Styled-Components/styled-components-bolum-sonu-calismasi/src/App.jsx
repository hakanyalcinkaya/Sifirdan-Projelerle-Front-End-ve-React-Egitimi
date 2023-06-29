import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { SiteContext } from "./context/SiteContext";
import { GlobalStyle } from "./components/styled/GlobalStyle";
import Header from "./components/Header";
import { darkTheme, lightTheme } from "./theme";
import Main from "./components/Main";


export default function App() {
  const { themeName } = useContext(SiteContext);

  return (
    <>
      <ThemeProvider theme={themeName === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
}
