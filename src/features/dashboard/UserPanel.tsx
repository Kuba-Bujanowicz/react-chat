import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
import UserProvider, { useUser } from '../../common/context/UserProvider';

const UserPanel = () => {
  const { logout, isLoading, isAuthenticated } = useAuth();
  const { user, fetchCurrentUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    (async () => await fetchCurrentUser())();
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <p>id: {user ? user.id : 'Loading...'}</p>
      <p>email: {user ? user.email : 'Loading...'}</p>
      <p>name: {user ? user.name : 'Loading...'}</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default UserPanel;
