import { useEffect, useState } from 'react';
import { Api } from '../../common/base/Api';
import { User } from '../../common/models/User';

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    Api.get('/currentUser').then((response) => setUser(response));
  }, []);

  return {
    user,
  };
};

export default useUser;
