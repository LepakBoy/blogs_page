import { IMessageInput } from '@/lib/interfaces';
import React from 'react';

export default function MessageInput(props: IMessageInput) {
  return (
    <div className="text-rose-600 text-sm bottom-[-28px] bg-red-200 w-full p-1 rounded-sm absolute">
      {props.msg}
    </div>
  );
}
