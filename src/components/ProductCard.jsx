import getPrice from '../helpers/getPrice';
import PropTypes from 'prop-types';

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

ProductCard.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number, 
    sellingPrice: PropTypes.number,
  }).isRequired
}


export default ProductCard;