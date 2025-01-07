import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    // Check if user is logged in
    const user = useSelector((state) => state?.users);
    const { userAuth } = user;

    // Check if the user is an admin
    return userAuth?.isAdmin ? children : <Navigate to="/not-admin" />;
};

export default AdminRoute;
