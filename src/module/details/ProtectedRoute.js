// import React from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';

// function ProtectedRoutes() {
//   const navigate = useNavigate();
//   const auth = localStorage.getItem('loggedIn');

  // Redirect to login if user is not authenticated
  // if (!auth) {
  //   navigate('/login');
    // Returning null because we're using Navigate for redirection,
    // so Outlet will not be rendered in this case
  //   return null;
  // }

  // Render child routes if user is authenticated
//   return <Outlet />;
// }

// export default ProtectedRoutes;
// ProtectedRoute.js

// ProtectedRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('loggedIn');
  
  return isAuthenticated ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;

