import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { THEME } from './theme'
import { GlobalStyle } from './components/styled/GlobalCSS.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
