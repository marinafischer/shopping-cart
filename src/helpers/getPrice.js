const getPrice = (value) => {
  const price = (value/100).toFixed(2);
  return `R$ ${price}`;
}

export default getPrice;