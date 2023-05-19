import ProductCard from "./ProductCard"

function ImgContainer({ products }) {
  return (
    <div className="grid">
      {products.filter(
        product => product.isAvailable
      ).map(
        product => <ProductCard product={product} key={product.id} />
      )
      }
    </div>
  )
}

export default ImgContainer