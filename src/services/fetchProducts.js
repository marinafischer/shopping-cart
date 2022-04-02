import lessThan10 from '../mocks/lessThan10.json';
import moreThan10 from '../mocks/moreThan10.json';

const getProducts = async (type) => {
  if(type === '/cartLess') return lessThan10;
  if(type === '/cartMore') return moreThan10
  else return {};
}

export default getProducts;