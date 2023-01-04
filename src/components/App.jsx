import React from 'react';
// import { Form } from './Form/Form';
// import { NameList } from './NameList/NameList';
// import { Filter } from './Filter/Filter';
// import { fetchContacts } from 'redux/operations';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
// import { Loader } from './Loader/Loader';
// import { RegisterForm } from './RegisterForm/RegisterForm';
// import { AppBar } from './Appbar/Appbar';
// import { Layout } from './Layout';
// import { UserMenu } from './UserMenu/UserMenu';
// import { userRegister, userLogin } from 'redux/operations';
// import axios from 'axios';
// import { Navigation } from './Navigation/Navigation';
// import { Route, Routes } from 'react-router-dom';
// import { LogInForm } from './LogInForm/LogInForm';
// import { UserMenu } from './UserMenu/UserMenu';
import { refreshUser } from 'redux/auth/operations';
import { useEffect } from 'react';
// import { useAuth } from 'hooks';


const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const PhoneBookPage = lazy(() => import('../pages/Phonebook'));


 

export function App() {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
{/* <Layout /> */}
{/* <UserMenu/> */}
      {/* <AppBar/> */}
     {/* <Navigation/> */}
     
      <PhoneBookPage/>
      <RegisterPage />
      <LoginPage/>
     
      
    </>
  );
}

