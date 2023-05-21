import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Category() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(res => setCategories(res))
  }, [])

  return (
    <>
      <h1>Kategoriler</h1>
      <div class="list-group">
        {
          categories.map((category, index) =>
            <Link
              key={index}
              to={`/products/category/${category}`} 
              className="list-group-item list-group-item-action"
              >
              {category.toUpperCase()}
            </Link>
          )
        }
      </div>
    </>
  )
}