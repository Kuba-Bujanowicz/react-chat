import { useEffect } from 'react';
import { Outlet, Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';

const PrivateRoute: React.FC<RouteProps> = () => {
  const { isAuthenticated, isAuthenticating, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  return isAuthenticating ? <div>Veryfing...</div> : isAuthenticated ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
