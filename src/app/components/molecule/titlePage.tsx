import React from 'react';

interface ITitlePage {
  title: string;
}

export default function TitlePage(props: ITitlePage) {
  return (
    <h1 className="text-2xl md:text-5xl font-extrabold text-center py-4 md:py-14">
      {props.title}
    </h1>
  );
}
