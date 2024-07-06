'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface INavlink {
  link: string;
  href: string;
}

export default function Navlink(props: INavlink) {
  const pathName = usePathname();
  console.log(pathName, 'name');
  return (
    <Link
      href={props.href}
      className={`hover:text-gray-50 ${
        pathName === props.href && 'text-emerald-800'
      }`}
    >
      {props.link}
    </Link>
  );
}
