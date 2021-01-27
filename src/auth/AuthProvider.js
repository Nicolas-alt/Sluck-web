import React, { useCallback, useState, createContext } from 'react';
import { fetchWithOutToken } from '../helpers/fetchWithOutToken';

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
  const login = async (email, password) => {
    try {
      const response = await fetchWithOutToken(
        'auth/login',
        { email, password },
        'POST'
      );

      if (response.token) {
        localStorage.setItem('tokenSluck', response.token);

        const {
          userDb: { uid, userName, email },
        } = response;

        setAuth({
          uid: uid,
          cheking: false,
          logged: true,
          name: userName,
          email,
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  };
  const logOut = () => {};

  const register = async (userName, email, password) => {
    try {
      const response = await fetchWithOutToken(
        'auth/register',
        { userName, email, password },
        'POST'
      );

      console.log(response);
      if (response.token) {
        localStorage.setItem('tokenSluck', response.token);

        const {
          user: { uid, userName, email },
        } = response;

        setAuth({
          uid: uid,
          cheking: false,
          logged: true,
          name: userName,
          email,
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  };

  const tokenValidator = useCallback(() => {}, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
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
