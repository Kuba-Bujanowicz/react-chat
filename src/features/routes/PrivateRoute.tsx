import { Outlet, Navigate, RouteProps } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';

const PrivateRoute: React.FC<RouteProps> = () => {
  const { isLoading, user } = useAuth();
  console.log(isLoading, user);

  return isLoading ? null : user ? user.isVerified ? <Outlet /> : <Navigate to={`verify-email/${user.email}`} /> : <Navigate to='/signin' />;
};

export default PrivateRoute;
