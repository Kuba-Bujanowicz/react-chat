import { Outlet, Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
import { useUser } from '../../common/context/UserProvider';

const PrivateRoute: React.FC<RouteProps> = () => {
  const { isAuthenticated, isAuthenticating } = useAuth();
  const { user, isLoading } = useUser();

  return isAuthenticating || isLoading ? null : isAuthenticated && user ? <Outlet /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
