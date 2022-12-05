import { useAuth } from '../../common/context/AuthProvider';

export const Loading: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isLoading, isAuthenticating } = useAuth();
  return (
    <div>
      {isLoading || isAuthenticating ? (
        <div style={{ width: '100%', textAlign: 'center', lineHeight: '100vh', height: '100%', position: 'absolute', color: 'white', background: 'rgba(0,0,0,0.7' }}>Loading...</div>
      ) : null}

      {children}
    </div>
  );
};
