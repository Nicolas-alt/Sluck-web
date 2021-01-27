import React from 'react';
import CustomHelmet from '../components/CustomHelmet';
import InboxPeople from '../components/InboxPeople';
import MessageScreen from '../components/MessageScreen';
import '../assets/styles/Chat.css';

const Chat = () => {
  return (
    <>
      <CustomHelmet title="General" />
      <div className="messaging">
        <div className="inbox_msg">
          <InboxPeople />
          <MessageScreen />
        </div>
      </div>
    </>
  );
};

export default Chat;
