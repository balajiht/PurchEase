 import axios from 'axios';


const Baseurl = 'https://api.escuelajs.co/api/v1';


export const getallcategories = async() => {
  
    const url = `${Baseurl}/categories`;
    try {
        const {data}=await axios.get(url)
    return data;
  } catch (err) {
    console.error("Failed to fetch products:", err);
    return err;
  }
}
