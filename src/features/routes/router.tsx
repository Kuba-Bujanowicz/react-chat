import { createBrowserRouter } from 'react-router-dom';
import Page404 from '../../components/404/Page404';
import UserPanel from '../dashboard/UserPanel';
import SignUp from '../signup/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UserPanel />,
    errorElement: <Page404 />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);
