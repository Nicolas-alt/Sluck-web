import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const SearchBox = () => {
  const { auth, logOut } = useContext(AuthContext);
  return (
    <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h3>{auth.name}</h3>
        <h4>Recientes</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <button className="btn text-danger" onClick={logOut}>
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
