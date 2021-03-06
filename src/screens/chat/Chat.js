import React from 'react';
import './Chat.scss';
import CustomHelmet from '../../components/CustomHelmet';
import InboxPeople from '../../components/InboxPeople';
import MessageScreen from '../../components/messages/MessageScreen';

const Chat = () => {
  return (
    <>
      <CustomHelmet title="General" />
      <section className="section--messaging">
        <InboxPeople />
        <MessageScreen />
      </section>
    </>
  );
};

export default Chat;
