import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthProvider from '../auth/AuthProvider';
import Chat from '../screens/Chat';
import AuthRoutes from './AuthRoutes';

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRoutes} />
          <Route exact path="/" component={Chat} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
