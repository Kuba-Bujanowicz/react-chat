import { createBrowserRouter } from 'react-router-dom';
import Page404 from '../../components/404/Page404';
import UserPanel from '../dashboard/UserPanel';
import EmailVerification from '../emailVerification/EmailVerification';
import SignIn from '../signin/SignIn';
import SignUp from '../signup/SignUp';
import PersistRedirectRoute from './PersistRedirectRoute';
import PrivateRoute from './PrivateRoute';
import VerifiedRoute from './VerifiedRoute';

export const router = createBrowserRouter([
  {
    path: '/signup',
    element: <PersistRedirectRoute element={<SignUp />} />,
  },
  {
    path: '/signin',
    element: <PersistRedirectRoute element={<SignIn />} />,
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/verify-email',
        element: <EmailVerification />,
      },
      {
        path: '/',
        element: <VerifiedRoute />,
        children: [
          {
            path: '/',
            element: <UserPanel />,
          },
        ],
      },
    ],
    errorElement: <Page404 />,
  },
]);
