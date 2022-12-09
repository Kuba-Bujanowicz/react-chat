import { createBrowserRouter } from 'react-router-dom';
import Page404 from '../../components/404/Page404';
import UserPanel from '../dashboard/UserPanel';
import EmailVerification from '../emailVerification/EmailVerification';
import SignIn from '../signin/SignIn';
import SignUp from '../signup/SignUp';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/verify-email',
    element: <EmailVerification />,
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <UserPanel />,
      },
    ],
    errorElement: <Page404 />,
  },
]);
