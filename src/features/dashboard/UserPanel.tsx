import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';

const UserPanel = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/signin');
  };

  return (
    <div>
      <p>id: {user?.id}</p>
      <p>email: {user?.email}</p>
      <p>name: {user?.name}</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default UserPanel;
