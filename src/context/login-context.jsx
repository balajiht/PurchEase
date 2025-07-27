 import { createContext, useContext, useReducer } from "react";
import loginReducer from "./reducers/loginReducer";

const loginContext = createContext();

const LoginProvider = ({ children }) => {
  const initialState = {
    email: '',
    password: '',
    token: {
      access_token: localStorage.getItem('token') || '',
      refresh_token: ''
    }
  };

  const [{ email, password, token }, loginDispatch] = useReducer(loginReducer, initialState);

  
  if (token?.access_token) {
    localStorage.setItem('token', token.access_token);
  } else {
    localStorage.removeItem('token');
  }

  return (
    <loginContext.Provider value={{ email, password, token, loginDispatch }}>
      {children}
    </loginContext.Provider>
  );
};

const useLogin = () => useContext(loginContext);

export { LoginProvider, useLogin };
