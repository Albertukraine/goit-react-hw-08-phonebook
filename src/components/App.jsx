import React from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import { useEffect } from 'react';

// import { useAuth } from 'hooks';

const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const PhoneBookPage = lazy(() => import('../pages/Phonebook'));
const HomePage = lazy(() => import('../pages/Home'));

export function App() {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="phonebook" element={<PhoneBookPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}
