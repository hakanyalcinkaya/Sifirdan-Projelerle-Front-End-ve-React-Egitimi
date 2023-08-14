export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Ana Sayfa</a>
            <a className="nav-link" href="#">Fetch: Kategoriler</a>
            <a className="nav-link" href="#">Axios: Kategoriler</a>
            <a className="nav-link" href="#">RTK Q: Kategoriler</a>
          </div>
        </div>
      </div>
    </nav>

  )
}