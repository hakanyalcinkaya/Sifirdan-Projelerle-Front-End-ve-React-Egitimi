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
- [ ] Default Olarak Hicbir Gorsel Secilmesin ve bu durumda Gorsel Secilmedi Component i ekranda gozuksun
- [ ] products icerisinde id, name, imgName, thumbnail, isAvailable(true/false), isActive(false)
- [ ] Lorem Picsum Gorselleri imgName icinde ve thumbnail icinde tutulsun
- [ ] Bolum Sonu Calismasi v1 Layout Uygulansin..
- [ ] Img Thumbnail altinda sec butonu olsun ve sec dedigimizde isActive True olsun..
*/