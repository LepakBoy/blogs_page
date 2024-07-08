import { IInputForm } from '@/lib/interfaces';
import React from 'react';

export default function InputFormComponent(props: IInputForm) {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      className="p-3 border-solid border border-gray-600 rounded-lg"
    />
  );
}
