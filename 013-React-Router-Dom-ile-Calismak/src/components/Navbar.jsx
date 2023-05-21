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
              <a className="nav-link active" aria-current="page" href="#">Ana Sayfa</a>
              <a className="nav-link" href="#">Urunler</a>
              <a className="nav-link" href="#">Hakkimizda</a>
              <a className="nav-link" href="#">Iletisim</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}