import { useEffect } from 'react';
import { Outlet, Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';

const PrivateRoute: React.FC<RouteProps> = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
