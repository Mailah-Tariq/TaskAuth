
import { Navigate } from 'react-router-dom';
import React, { useContext } from 'react'; 
import { AuthContext } from '../context/AuthContext'; 

export const PublicRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    return currentUser ? <Navigate to="/todos" /> : children;
  };
export default PublicRoute;
