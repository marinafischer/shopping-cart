import getPrice from '../helpers/getPrice';
import PropTypes from 'prop-types';
import '../styles/ProductCard.css'

const ProductCard = ({product}) => {
  return (
    <>
      <div className="imageContent">
        <img className="productImage" src={product.imageUrl} alt="product" />
      </div>
      <div className="productDetails">
        <h4 className="productName">
          {product.name}
        </h4>
        <span className="productPrice smallPrice">
          <small>
            {getPrice(product.price)}
          </small>
        </span>
        <br />
        <span className="productPrice">
          {getPrice(product.sellingPrice)}
        </span>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number, 
    sellingPrice: PropTypes.number,
  }).isRequired
}


export default ProductCard;