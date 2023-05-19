import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@picocss/pico"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
- [x] Default Olarak Hicbir Gorsel Secilmesin ve bu durumda Gorsel Secilmedi Component i ekranda gozuksun
- [x] products icerisinde id, name, imgName, thumbnail, isAvailable(true/false), isActive(false)
- [x] Lorem Picsum Gorselleri imgName icinde ve thumbnail icinde tutulsun
- [x] Bolum Sonu Calismasi v1 Layout Uygulansin..
- [x] Img Thumbnail altinda sec butonu olsun ve sec dedigimizde isActive True olsun..
*/