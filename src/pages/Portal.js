import React from 'react';
import { LoginForm, RegisterForm, LogoTitle } from '../components/';
import '../styles/portal.css';

const Portal = () => {
  return (
    <>
      <LogoTitle />
      <LoginForm />
      <RegisterForm />
    </>
  );
}

export default Portal;
