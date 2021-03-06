import React from 'react';
import '../assets/styles/Chat.css';
import CustomHelmet from '../../components/CustomHelmet';
import InboxPeople from '../../components/InboxPeople';
import MessageScreen from '../../components/messages/MessageScreen';

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
