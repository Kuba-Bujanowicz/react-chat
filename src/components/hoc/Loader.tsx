import { PropsWithChildren } from 'react';
import { useAuth } from '../../common/context/AuthProvider';
import { useUser } from '../../common/context/UserProvider';
import Spinner from '../spinner/Spinner';

const Loader: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useUser();
  const { isAuthenticating } = useAuth();

  return isLoading || isAuthenticating ? <Spinner /> : <>{children}</>;
};

export default Loader;
