import ButtonSignUp from '@/app/components/molecule/buttonSignUp';
import { credentialsList } from '@/app/static/credentialsButton';
import React from 'react';

export default function ButtonsGroup() {
  return (
    <div className="my-8 grid grid-rows-2 grid-flow-col gap-4">
      {credentialsList.map((list) => (
        <ButtonSignUp
          key={list.name}
          name={list.name}
          credential={list.credentials}
          icon={list.icon}
        />
      ))}
    </div>
  );
}
