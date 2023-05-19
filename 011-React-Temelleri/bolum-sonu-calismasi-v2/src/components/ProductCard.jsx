function ProductCard({ product }) {
  return(
    <>
      <article>
        <header>{product.name}</header>
        <img src={product.thumbnail} alt=""  />
        <footer>btn</footer>
      </article>
    </>
  )
}

export default ProductCard