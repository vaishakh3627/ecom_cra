import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "./AuthContext";

function RequireAuth({ children }) {

    let auth = useAuth();
    let location = useLocation();

    if (!auth.user.token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth