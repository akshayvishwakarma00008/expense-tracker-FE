import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check for logged-in user
  const user = useSelector((state) => state?.users);
  const { userAuth } = user;

  // Redirect to login if not authenticated
  return userAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
