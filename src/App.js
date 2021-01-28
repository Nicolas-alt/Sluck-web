import React from 'react';
import AuthProvider from './auth/AuthProvider';
import SocketProvider from './context/SocketContext';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <AppRoutes />
      </SocketProvider>
    </AuthProvider>
  );
};

export default App;
