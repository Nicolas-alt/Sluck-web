import React, { createContext, useReducer } from 'react';
import { chatReducer } from './chatReducer';

export const ChatContext = createContext();

const initialState = {
  uid: '',
  activeChat: null,
  users: [],
  messages: [],
};

const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = useReducer(chatReducer, initialState);
  return (
    <ChatContext.Provider
      values={{
        chatState,
        dispatch,
        initialState,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
