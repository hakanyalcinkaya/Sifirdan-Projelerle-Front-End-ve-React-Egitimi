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
Yapilacak Islemler:
- [x] Pico CSS Kullanilsin
- [x] Ana Gorsel Olsun
- [x] Hemen Altta 5 Adet Kucuk Gorsel Olsun
- [x] Kucuk Gorsellerden Birine Tiklaninca Ana Gorsel Degissin
- [x] Gorsell Lorem Picsum'dan Gelsin
- [x] Default Olarak 200 Nolu ID Secilsin
- [x] Gorseller ARRAY Olarak [100, 211, 222, 103, 44]
*/