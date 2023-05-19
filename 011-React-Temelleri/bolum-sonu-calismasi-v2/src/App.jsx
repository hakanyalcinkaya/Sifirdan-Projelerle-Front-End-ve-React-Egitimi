import { useEffect, useState } from 'react'
import { products as productsObject } from './data/products'
import ImgNotSelected from './components/ImgNotSelected'
import ImgContainer from './components/ImgContainer'

function App() {
  const [isActiveProduct, setIsActiveProduct] = useState(productsObject.find(item => item.isActive))
  const [products, setProducts] = useState(productsObject)

  console.log(isActiveProduct)
  
  return (
    <>
      <main className="container">
        {
          isActiveProduct ? <h1>{isActiveProduct.name}</h1> : <ImgNotSelected />
        }
        <ImgContainer products={products} />
      </main>
    </>
  )
}

export default App
