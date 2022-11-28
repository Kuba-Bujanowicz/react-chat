import { useEffect } from 'react';
import { Outlet, Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';

const PrivateRoute: React.FC<RouteProps> = () => {
  const { user, getCurrentUser } = useAuth();
  useEffect(() => {
    getCurrentUser();
  }, []);
  return true ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
