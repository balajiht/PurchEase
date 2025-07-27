 // utils/getproductsbycategories.js
export const getproductsbycategories = (products, category) => {
  return category.toLowerCase() === 'all'
    ? products
    : products.filter(
        (p) => p.category.name.toLowerCase() === category.toLowerCase()
      );
};
