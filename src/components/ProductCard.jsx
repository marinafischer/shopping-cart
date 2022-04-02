import getPrice from '../helpers/getPrice';

const ProductCard = ({product}) => {
  return (
    <>
      <img src={product.imageUrl} alt="product" style={{width:'80px'}}/>
      <div>
        <h2>
          {product.name}
        </h2>
        <span>
          {getPrice(product.price)}
        </span>
        <br />
        <span>
          {getPrice(product.sellingPrice)}
        </span>
      </div>
    </>
  );
};

export default ProductCard;