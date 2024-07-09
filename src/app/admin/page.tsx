import React from 'react';
import TitlePage from '../components/molecule/titlePage';
import InputForm from './form/inputForm';

export default function AdminPage() {
  return (
    <div>
      <TitlePage title="Post your article" />
      <InputForm />
    </div>
  );
}
