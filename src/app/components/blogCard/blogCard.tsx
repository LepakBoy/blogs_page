import Link from 'next/link';
import React from 'react';
import { ArrowRightIcon } from '../../../../public/svgs';

export default function BlogCard() {
  return (
    <div className="card group p-6 rounded-lg relative bg-[url('/images/photo.jpg')] h-[440px] bg-origin-border hover:bg-origi bg-center">
      <div className="absolute bottom-[18px] w-full left-0 right-0 p-3">
        <h3 className="mb-[14px] font-extrabold text-3xl text-slate-50 drop-shadow-md">
          Perfect for lightweight applications where bulk is undesirable
        </h3>
        <div className="flex group-hover:align-middle justify-between w-full">
          <h6 className="font-bold text-slate-50 text-sm drop-shadow-md">
            JAN 15, 2023
          </h6>
          <Link
            href="/"
            className="bg-lime-500 align-middle w-[142px] font-bold text-slate-50 text-sm drop-shadow-md hidden group-hover:flex group-hover:animate-slideIn hover:cursor-pointer fill-slate-50 justify-between"
          >
            READ MORE
            <ArrowRightIcon className="fill-slate-50" />
          </Link>
        </div>
      </div>
    </div>
  );
}
