import { useEffect } from 'react';
import { useAuth } from '../../common/context/AuthProvider';
import { useUser } from '../../common/context/UserProvider';

const UserPanel = () => {
  const { logout } = useAuth();
  const { user, fetchCurrentUser } = useUser();

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    (async () => await fetchCurrentUser())();
  }, []);

  return (
    <div>
      <p>id: {user ? user.id : 'Loading...'}</p>
      <p>email: {user ? user.email : 'Loading...'}</p>
      <p>name: {user ? user.name : 'Loading...'}</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default UserPanel;
