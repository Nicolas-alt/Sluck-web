import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Chat from '../screens/Chat';

const ChatRoutes = () => {
  return (
    <Switch>
      <Route exact path="/user" component={Chat} />
      <Redirect to="/user" />
    </Switch>
  );
};

export default ChatRoutes;
