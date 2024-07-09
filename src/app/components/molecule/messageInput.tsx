import { IMessageInput } from '@/lib/interfaces';
import React from 'react';

export default function MessageInput(props: IMessageInput) {
  return <div className="">{props.msg}</div>;
}
