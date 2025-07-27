 import axios from 'axios';

// Base API URL
//const Baseurl = 'https://api.escuelajs.co/api/v1';

// Async function to get all products
export const getAllProducts = async () => {
  
    const url = `https://api.escuelajs.co/api/v1/products`;
    try {
        const {data}=await axios.get(url)
    return data;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return err;
  }
}


// export const getAllProducts = async () => {
//   try {
//     const response = await fetch("/all_products.json"); // No relative path
//     const data = await response.json();
//     return data.products;
//   } catch (err) {
//     console.error("Failed to fetch products:", err);
//     return [];
//   }
// };

