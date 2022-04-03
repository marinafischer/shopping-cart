import fetchProducts from '../services/fetchProducts';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import getPrice from '../helpers/getPrice';
import '../styles/Cart.css'

const Cart = () => {
  const [data, setData] = useState({});
  const history = useHistory();
  const { location: { pathname } } = history;

  const getData = async() => {
    const fetchData = await fetchProducts(pathname);
    setData(fetchData);
  }

  useEffect(() => {
    getData();
  }, [])

  if (Object.keys(data).length > 0) {
    return (
      <div className="cartCointainer">
        <div className="dashContainer">
          <h1 class="mainTitle">Meu carrinho</h1>
        </div>
        <div className="dashContainer">
          {
            data.items.map((item) => (
              <div key={item.uniqueId} className="productCard">
                <ProductCard product = {item} />
              </div>
            ))
          }
        </div>
        <div className="dashContainer">
          <div className="totalContent">
            <h1 class="mainTitle">Total</h1>
            <h1 class="mainTitle">{getPrice(data.value)}</h1>
          </div>
          {
            data.value > 1000 && 
              <span className="shippingSpan"> Parabéns, sua compra tem frete grátis !</span>
          }
        </div>
        <button type="button" className="finishButton">
          Finalizar compra
        </button>
      </div>
    )
  }
  else (<span>Loading...</span>)
};

export default Cart;