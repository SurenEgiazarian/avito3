import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const ProfilePage = React.lazy(() => import('../pages/ProfilePage'));
const AdPage = React.lazy(() => import('../pages/AdPage'));
const SellerPage = React.lazy(() => import('../pages/SellerPage'));
const NewAdPage = React.lazy(() => import('../pages/MobilesPages/Ads/NewAdPage'));
const EditAdPage = React.lazy(() => import('../pages/MobilesPages/Ads/EditAdPage'));
const ReviewsPage = React.lazy(() => import('../pages/MobilesPages/ReviewsPage'));
const SignInPage = React.lazy(() => import('../pages/MobilesPages/SignInPage'));
const SignUpPage = React.lazy(() => import('../pages/MobilesPages/SignUpPage'));
import ProtectedRoute from './ProtectedRoute';
import MainLayout from '../layouts/MainLayout/MainLayout';
import MainPage from '../pages/MainPage';
import Loader from '../components/Loader';

import { useSelector } from 'react-redux';

import { getAuthStatus } from '../store/selectors/authSelector';
import NotFoundPage from '../pages/NotFoundPage';

const AppRoutes = () => {
  const isAuth = useSelector(getAuthStatus);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route
            path="/profile"
            element={
              <React.Suspense fallback={<Loader />}>
                <ProfilePage />
              </React.Suspense>
            }
          />
        </Route>
        <Route element={<ProtectedRoute isAuth={isAuth && isMobile} />}>
          <Route
            path="/create-ad"
            element={
              <React.Suspense fallback={<Loader />}>
                <NewAdPage />
              </React.Suspense>
            }
          />
          <Route
            path="/edit-ad/:id"
            element={
              <React.Suspense fallback={<Loader />}>
                <EditAdPage />
              </React.Suspense>
            }
          />
          <Route
            path="/reviews/:id"
            element={
              <React.Suspense fallback={<Loader />}>
                <ReviewsPage />
              </React.Suspense>
            }
          />
        </Route>
        <Route element={<ProtectedRoute isAuth={isMobile} />}>
          <Route
            path="/signin"
            element={
              <React.Suspense fallback={<Loader />}>
                <SignInPage />
              </React.Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <React.Suspense fallback={<Loader />}>
                <SignUpPage />
              </React.Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<MainPage />} />
        <Route
          path="/ad/:id"
          element={
            <React.Suspense fallback={<Loader />}>
              <AdPage />
            </React.Suspense>
          }
        />
        <Route
          path="/seller/:id"
          element={
            <React.Suspense fallback={<Loader />}>
              <SellerPage />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
