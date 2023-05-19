const ProductCardBtn = ({productId, handleProductSelect}) => <button 
  className="outline"
  onClick={() => handleProductSelect(productId)}
  >Sec.. {productId}
</button>

export default ProductCardBtn