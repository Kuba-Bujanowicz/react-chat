import { Outlet, Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';

const PrivateRoute: React.FC<RouteProps> = () => {
  const { isAuthenticated, isAuthenticating } = useAuth();

  return isAuthenticating ? <div>Veryfing...</div> : isAuthenticated ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
