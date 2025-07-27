 // utils/getproductsbycategories.js
export const getproductsbycategories = (products, category) => {
  const selectedCategory = category.toLowerCase();

  return selectedCategory === 'all'
    ? products
    : products.filter(
        (p) => p.category?.name?.toLowerCase() === selectedCategory
      );
};

