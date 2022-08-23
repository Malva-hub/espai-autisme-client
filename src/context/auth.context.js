import { createContext, useEffect, useState } from "react";

import { verifyService } from "../services/auth.services";

import Spinner from 'react-bootstrap/Spinner';

const AuthContext = createContext();

function AuthWrapper(props) {
  const [isUserActive, setIsUserActive] = useState(false);
 
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    authenticateUser();
  }, []);

  const authenticateUser = async () => {
    try {
      const response = await verifyService();
      setIsUserActive(true);
      setUser(response.data);
      setIsFetching(false);
    } catch (error) {
      setIsUserActive(false);
      setUser(null);
      setIsFetching(false);
    }
  };

  const passedContext = {
    isUserActive,
    user,
    authenticateUser,
    
  };

  if (isFetching === true) {
    return (
      <div>
          <Spinner animation="border" variant="info" /> <h3> ...Is Validating User</h3>;

      </div> )
  }

  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
