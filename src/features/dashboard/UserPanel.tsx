import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../common/context/AuthProvider';
import { useUser } from '../../common/context/UserProvider';

const UserPanel = () => {
  const { logout } = useAuth();
  const { user } = useUser();

  return (
    <div>
      <p>email: {user ? user.email : 'Loading...'}</p>
      <p>name: {user ? user.name : 'Loading...'}</p>
      <p>verified: {user ? String(user.isVerified) : 'Loading...'}</p>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default UserPanel;
