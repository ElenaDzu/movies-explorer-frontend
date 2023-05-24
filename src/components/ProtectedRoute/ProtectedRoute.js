import React from "react";
import { Navigate, Link } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, children }) => {
  if (loggedIn === null) {
    return (
      <>
        <Link to="/" className="main-link">
          На главную
        </Link>
      </>
    );
  }

  return loggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
