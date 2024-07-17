import React from 'react';
import LoginForm from './loginForm/loginForm';
import ButtonSignUp from '../components/molecule/buttonSignUp';
import ButtonsGroup from './buttonsGroup/buttonsGroup';

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <LoginForm />
      <ButtonsGroup />
    </div>
  );
}
