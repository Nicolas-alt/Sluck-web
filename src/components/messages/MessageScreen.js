import React from 'react';
import Message from './Message';
import MessageInput from './MessageInput';
import MessageSend from './MessageSend';

const MessageScreen = () => {
  return (
    <div className="mesgs">
      <div className="msg_history">
        <Message />
        <MessageSend />
      </div>
      <MessageInput />
    </div>
  );
};

export default MessageScreen;
