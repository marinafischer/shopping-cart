import fetchProducts from '../services/fetchProducts';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import getPrice from '../helpers/getPrice';

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
      <div>
        <h1>Meu carrinho</h1>
        <div>
          {
            data.items.map((item) => (
              <div key={item.uniqueId}>
                <ProductCard product = {item} />
              </div>
            ))
          }
        </div>
        <div>
          <div>
            <h1>Total</h1>
            <h1>{getPrice(data.value)}</h1>
          </div>
          {
            data.value > 1000 && <span>Parabéns, sua compra tem frete grátis !</span>
          }
        </div>
        <button type="button">Finalizar compra</button>
      </div>
    )
  }
  else (<span>Loading...</span>)
};

export default Cart;