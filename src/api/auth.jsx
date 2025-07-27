 import axios from 'axios';

export const userlogin = async (email, password)  => {
  const url = 'https://api.escuelajs.co/api/v1/auth/login';
  try {
    const { data } = await axios.post(url, {
      email,
      password,
    });

    return data;
  } catch (err) {
    console.error("Login failed:", err);

    return err;
  }
};
