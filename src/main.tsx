import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './common/context/AuthProvider';
import { Loading } from './components/hoc/Loading';
import { router } from './features/routes/router';
import './global.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <Loading>
        <RouterProvider router={router} />
      </Loading>
    </AuthProvider>
  </StrictMode>
);
