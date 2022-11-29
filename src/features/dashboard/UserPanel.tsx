import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
import UserProvider, { useUser } from '../../common/context/UserProvider';

const UserPanel = () => {
  const { logout } = useAuth();
  const { user, fetchCurrentUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/signin');
  };

  useEffect(() => {
    (async () => await fetchCurrentUser())();
  }, []);

  return (
    <UserProvider>
      <p>id: {user?.id}</p>
      <p>email: {user?.email}</p>
      <p>name: {user?.name}</p>
      <button onClick={handleLogout}>logout</button>
    </UserProvider>
  );
};

export default UserPanel;
