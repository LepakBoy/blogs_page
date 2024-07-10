import { IInputForm } from '@/lib/interfaces';
import React from 'react';
import MessageInput from './messageInput';
import { InputText as InputComponent } from 'primereact/inputtext';

export default function InputText(props: IInputForm) {
  return (
    <div className="relative">
      <InputComponent
        id={props.name}
        // invalid={true}
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className="p-2 w-full border-solid border rounded-md"
        value={props.value}
      />
      {props.error && <MessageInput msg={props.error} />}
    </div>
  );
}
