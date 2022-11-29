import { useEffect, useState } from 'react';
import { Outlet, Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';

const PrivateRoute: React.FC<RouteProps> = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
