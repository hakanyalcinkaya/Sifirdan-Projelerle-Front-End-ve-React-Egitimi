import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
/* 
TODO: Bootstrap Nav Yapisi Olustur
TODO: React Router DOM'u Kur
TODO: Ana Sayfa, Her Api icin Kategori Olustur
TODO: .env yapisi Olustur ve Icine Bilgi Ekle
TODO: Container ve Row icin Component Olustur..
TODO: Cat APIdan Key Al
TODO: Cat API Yapisini Fetch ile Kullan
TODO: isLoading, isError, error ve data yapisini Kurgula
TODO: Cat API Custom Hook Yap ;)
TODO: Cat API Kategori Detay Sayfasi Yap
TODO: UI Duzenlemesi Yap
TODO: Axios ile Ayni Calismalari Tekrarla
TODO: RTK Query ile Ayni Yapiyi Kurgula..
*/