import React, { useCallback, useState, createContext } from 'react';

export const AuthContext = createContext();

const initialState = {
  uid: null,
  cheking: true,
  logged: false,
  name: null,
  email: null,
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);
  const login = (email, password) => {};
  const logOut = () => {};
  const register = (userName, email, password) => {};
  const tokenValidator = useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logOut,
        register,
        tokenValidator,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
