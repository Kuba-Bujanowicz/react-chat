import { ReactElement } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
import { useUser } from '../../common/context/UserProvider';

const PersistRedirectRoute: React.FC<RouteProps> = ({ element }) => {
  const { user, isLoading } = useUser();
  const { isAuthenticated, isAuthenticating } = useAuth();

  return isLoading || isAuthenticating ? null : user && isAuthenticated ? <Navigate to='/' /> : (element as ReactElement);
};

export default PersistRedirectRoute;
