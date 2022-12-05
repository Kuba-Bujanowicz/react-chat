import { useAuth } from '../../common/context/AuthProvider';
import useUser from './useUser';

const UserPanel = () => {
  const { logout } = useAuth();
  const { user } = useUser();

  return (
    <div>
      <p>id: {user ? user.id : 'Loading...'}</p>
      <p>email: {user ? user.email : 'Loading...'}</p>
      <p>name: {user ? user.name : 'Loading...'}</p>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default UserPanel;
