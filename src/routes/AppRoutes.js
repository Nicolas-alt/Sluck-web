import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Chat from '../screens/chat/Chat';
import Home from '../screens/home/Home';
import AuthRoutes from './AuthRoutes';

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRoutes} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Chat} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
