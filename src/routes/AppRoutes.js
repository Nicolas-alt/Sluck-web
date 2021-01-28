import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import Loader from '../components/Loader';
import Chat from '../screens/Chat';
import AuthRoutes from './AuthRoutes';
import PrivateRoutes from './PrivateRoute';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
  const { auth, tokenValidator } = useContext(AuthContext);
  useEffect(() => {
    tokenValidator();
  }, [tokenValidator]);

  if (auth.cheking) {
    return <Loader />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes
            isAuthenticated={auth.logged}
            path="/auth"
            component={AuthRoutes}
          />
          <PrivateRoutes
            isAuthenticated={auth.logged}
            path="/"
            component={Chat}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
