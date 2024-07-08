import React from 'react';

interface ITitlePage {
  title: string;
}

export default function TitlePage(props: ITitlePage) {
  return (
    <h1 className="text-4xl md:text-8xl font-extrabold text-center py-4 md:py-14">
      {props.title}
    </h1>
  );
}
