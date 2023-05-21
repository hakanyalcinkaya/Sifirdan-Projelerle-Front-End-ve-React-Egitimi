import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#">R-Store</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
              <NavLink className="nav-link" to="/urunler">Urunler</NavLink>
              <NavLink className="nav-link" to="/about">Hakkimizda</NavLink>
              <NavLink className="nav-link" to="/contact">Iletisim</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}