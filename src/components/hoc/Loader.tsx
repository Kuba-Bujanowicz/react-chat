import { PropsWithChildren } from 'react';
import { useAuth } from '../../common/context/AuthProvider';
import { useUser } from '../../common/context/UserProvider';

const Loader: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useUser();
  const { isAuthenticating } = useAuth();

  return isLoading || isAuthenticating ? (
    <div style={{ height: '100vh', width: '100%', textAlign: 'center', lineHeight: '100vh', color: 'white', backgroundColor: 'rgba(0,0,0,0.7)' }}>Loading...</div>
  ) : (
    <>{children}</>
  );
};

export default Loader;
