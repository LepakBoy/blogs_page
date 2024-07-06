import Link from 'next/link';
import React from 'react';

interface ILink {
  link: string;
  href: string;
}

export default function LinkComponent(props: ILink) {
  return (
    <Link
      href={props.href}
      className="underline text-emerald-800 text-sm"
    >
      {props.link}
    </Link>
  );
}
