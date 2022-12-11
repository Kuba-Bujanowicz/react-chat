import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import { useUser } from '../../common/context/UserProvider';

const VerifiedRoute: React.FC<RouteProps> = () => {
  const { user, isLoading } = useUser();

  return isLoading ? null : user ? user.isVerified ? <Navigate to='/' /> : <Navigate to='/verify-email' /> : <Navigate to='/signin' replace />;
};

export default VerifiedRoute;
