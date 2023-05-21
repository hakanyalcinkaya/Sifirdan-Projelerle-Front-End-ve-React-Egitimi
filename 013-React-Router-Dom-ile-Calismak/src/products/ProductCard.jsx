import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  const productUrl = `/products/product/${item.id}`
  
  return (
    <div className="col-sm mb-3">
      <div className="card">
        <Link to={productUrl} >
        <img src={item.image} className="card-img-top p-3" alt={item.title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description.substring(0, 20)}..</p>
          <p className="lead">{item.price}</p>
          <a href="#" className="btn btn-primary">Fav</a>
        </div>
      </div>
    </div>
  )
}