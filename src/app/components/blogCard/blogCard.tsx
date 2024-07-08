import Link from 'next/link';
import React from 'react';
import { ArrowRightIcon } from '../../../../public/svgs';
import { IPost, IPostDocument } from '@/lib/interfaces';
import moment from 'moment';

interface IBlogCardProps extends IPost {
  datePost: Date;
}

export default function BlogCard(props: IBlogCardProps) {
  const backgroundImageStyle = {
    backgroundImage: `url('/images${props.img}')`,
  };

  return (
    <div
      style={backgroundImageStyle}
      className={`card group h-[400px] p-6 rounded-lg relative bg-origin-border hover:bg-origin-border bg-center`}
    >
      <div className="absolute bottom-[18px] w-full left-0 right-0 p-3">
        <h3 className="mb-[12px] font-extrabold text-3xl text-slate-50 drop-shadow-md">
          {props.title}
        </h3>
        <div className="flex group-hover:align-middle justify-between w-full">
          <h6 className="font-bold py-3 text-slate-50 text-sm drop-shadow-md">
            {moment(props.datePost).format('DD MMM YYYY')}
          </h6>
          <Link
            href={`/blog/${props.slug}`}
            className="items-center w-[142px] font-bold text-slate-50 text-sm drop-shadow-md hidden group-hover:flex group-hover:animate-slideIn justify-between"
          >
            READ MORE
            <ArrowRightIcon className="text-slate-50 text-4xl stroke-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// db.posts.insertOne({ title:"Navigating Jakarta: A Comprehensive Guide to Public Transport in the Indonesian Capital", desct: "lorem awokawoakwaokw", img: "/image5", slug: "blog5", labels: ["transportation"], datePost: "2024-07-08T02:50:17.367Z" } )
