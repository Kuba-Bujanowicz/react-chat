import { ReactElement } from 'react';
import { Navigate, RouteProps } from 'react-router-dom';
import { useUser } from '../../common/context/UserProvider';

const PersistRedirectRoute: React.FC<RouteProps> = ({ element }) => {
  const { user, isLoading } = useUser();

  return isLoading ? null : user ? <Navigate to='/' /> : (element as ReactElement);
};

export default PersistRedirectRoute;
