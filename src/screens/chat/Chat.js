import React from 'react';
import CustomHelmet from '../../components/CustomHelmet';
import InboxPeople from '../../components/InboxPeople';
import MessageScreen from '../../components/messages/MessageScreen';
import './Chat.scss';

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
