import { useEffect } from 'react';
import { Api } from '../../common/base/Api';

type Props = {};

const UserPanel = (props: Props) => {
  useEffect(() => {
    Api.get('/currentUser')
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error.response.data);
        window.location.replace('http://localhost:3000');
      });
  }, []);
  return <div>UserPanel</div>;
};

export default UserPanel;
