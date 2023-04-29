import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  redirectPath?: string;
  isAuth: boolean;
};

export const ProtectedRoute = ({ redirectPath = '/', isAuth }: Props) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
