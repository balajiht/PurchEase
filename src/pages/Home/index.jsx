
import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getallProducts";
import { ProductCard } from "../../components/Navbar/Productcard/Productcard";
import { getallcategories } from "../../api/getallcategories";
import { getproductsbycategories } from "../../utils/getproductsbyategories";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    (async () => {
      const products = await getAllProducts();
      const categories = await getallcategories();
      const updatedcategories = [...categories, { id: '1a', name: 'ALL' }];
      setProducts(products);
      setcategories(updatedcategories);
    })();
  }, []);

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = getproductsbycategories(products, selectedCategory);

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-8 justify-center p-8">
        <div className="flex gap-4 flex-wrap justify-center">
          {categories?.length > 0 &&
            categories.map((c) => (
              <div
                key={c.id}
                className="px-4 py-2 bg-slate-200 rounded-lg shadow hover:bg-slate-300 cursor-pointer"
                onClick={() => onCategoryClick(c.name)}
              >
                {c.name}
              </div>
            ))}
        </div>

       
        <div className="flex gap-4 flex-wrap justify-center">
          {filteredProducts?.length > 0 &&
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </main>
    </>
  );
};
