import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import { useUser } from '../../common/context/UserProvider';

const VerifiedRoute: React.FC<RouteProps> = () => {
  const { user, isLoading } = useUser();
  console.log('xd');

  return isLoading ? null : user ? user.isVerified ? <Outlet /> : <Navigate to='/verify-email' /> : <Navigate to='/signin' />;
};

export default VerifiedRoute;
