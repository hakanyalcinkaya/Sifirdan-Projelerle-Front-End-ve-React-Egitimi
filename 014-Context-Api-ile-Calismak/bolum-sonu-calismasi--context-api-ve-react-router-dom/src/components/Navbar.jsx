import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiteContext } from "../context/SiteContext";

export default function Navbar() {
  const {user, handleLogout} = useContext(SiteContext)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to="/">R-Store</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
              <NavLink className="nav-link" to="/products">Urunler</NavLink>
              <NavLink className="nav-link" to="/about">Hakkimizda</NavLink>
              <NavLink className="nav-link" to="/contact">Iletisim</NavLink>
              {
                user ?
                  <>
                    <NavLink className="nav-link" to="/fav">Favoriler</NavLink>
                    <button className="nav-link" onClick={handleLogout}>Logout ({user.name})</button>
                  </> :
                  <NavLink className="nav-link" to="/login">Login</NavLink>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}