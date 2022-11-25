import React from "react";
import { Navigate } from 'react-router-dom';
import { useAuth } from "../context/authContext";

export const ProtectedRoute = ({children}) => {
    const {CurrentUser} = useAuth();

    if (!CurrentUser) {
        return <Navigate to='/userlogin' replace/>
    }

    return children;
}