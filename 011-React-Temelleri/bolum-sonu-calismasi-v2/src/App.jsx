import { useEffect, useState } from 'react'
import { products as productsObject } from './data/products'

function App() {
  const [products, setProducts] = useState(productsObject)
  
  return (
    <>
      <main className="container">
        {products.map(product => <div key={product.id}>{product.name}</div>)}
      </main>
    </>
  )
}

export default App
