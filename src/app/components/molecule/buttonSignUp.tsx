import React from 'react';

interface IButtonSignUp {
  name: string;
  icon: any;
  credential: string;
}

export default function ButtonSignUp(props: IButtonSignUp) {
  return (
    <button className="border flex items-center gap-3 font-bold min-w-14 border-slate-400 p-3 hover:bg-slate-400 hover:text-white rounded-lg">
      {props.icon}
      {props.name}
    </button>
  );
}
