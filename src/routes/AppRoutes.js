import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../screens/App';
import sdaf from '../screens/sdaf';

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/x" component={sdaf} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
