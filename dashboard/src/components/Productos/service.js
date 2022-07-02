export const filterOptions = (select, products) => {
  if (select === '-1') {
    return products;
  }
  return products.filter((o) => Number(select) === o.categoriaId);
};
