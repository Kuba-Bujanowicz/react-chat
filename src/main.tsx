import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './common/context/AuthProvider';
import UserProvider from './common/context/UserProvider';
import Loader from './components/hoc/Loader';
import { router } from './features/routes/router';
import './global.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <UserProvider>
        <Loader>
          <RouterProvider router={router} />
        </Loader>
      </UserProvider>
    </AuthProvider>
  </StrictMode>
);
