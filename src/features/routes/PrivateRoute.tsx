import { Outlet, redirect } from 'react-router-dom';

const PrivateRoute = () => {
  const dupa = 'dupa';
  return dupa ? <Outlet /> : redirect('/signup');
};

export default PrivateRoute;
