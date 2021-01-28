import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { useSocket } from '../hooks/useSocket';

export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket(
    'http://localhost:8080'
  );
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth.logged) {
      connectSocket();
    }
  }, [auth, connectSocket]);

  useEffect(() => {
    if (!auth.logged) {
      disconnectSocket();
    }
  }, [auth, disconnectSocket]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
