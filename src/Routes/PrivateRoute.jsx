import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, dataLoading } = useContext(AuthContext);
  const location = useLocation();
  if (dataLoading) {
    return <h2 className="text-center"> Loading data...</h2>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={{ from: location }} to="/login"></Navigate>;
  }
}

export default PrivateRoute;
