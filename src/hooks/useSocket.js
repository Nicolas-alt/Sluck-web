import { useCallback, useEffect, useMemo, useState } from 'react';
import io from 'socket.io-client';

export const useSocket = (serverPath) => {
  const [socket, setSocket] = useState(null);

  const connectSocket = useCallback(() => {
    const token = localStorage.getItem('tokenSluck');
    const socketTemp = io.connect(serverPath, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
      query: {
        'x-token': token,
      },
    });
    setSocket(socketTemp);
  }, [serverPath]);

  const disconnectSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(socket?.connected);
  }, [socket]);

  useEffect(() => {
    socket?.on('connect', () => setOnline(true));
  }, [socket]);

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false));
  }, [socket]);

  return {
    socket,
    online,
    connectSocket,
    disconnectSocket,
  };
};
