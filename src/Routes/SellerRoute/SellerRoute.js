import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useSeller from '../../hooks/useSeller';

const SellerRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const location = useLocation();

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;