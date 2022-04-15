import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = (children) => {

    const [user] = useAuthState(auth);
    let location = useLocation();

    if (!auth.user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;


};

export default RequireAuth;