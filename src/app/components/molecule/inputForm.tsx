import { IInputForm } from '@/lib/interfaces';
import React from 'react';
import MessageInput from './messageInput';

export default function InputFormComponent(props: IInputForm) {
  return (
    <>
      <input
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className="p-3 border-solid border border-gray-600 rounded-lg"
      />
      <MessageInput msg={props.error} />
    </>
  );
}
