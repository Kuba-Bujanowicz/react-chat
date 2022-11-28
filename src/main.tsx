import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './common/context/AuthProvider';
import { router } from './features/routes/router';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
