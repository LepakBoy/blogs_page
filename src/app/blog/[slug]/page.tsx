import TitlePage from '@/app/components/molecule/titlePage';
import { getPostBySlug } from '@/lib/data';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';

const getData = async (slug: string) => {
  const res = getPostBySlug(slug);
  return res;
};

export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getData(slug);
  return (
    <section className="pb-20">
      <TitlePage title={post?.slug as string} />
      <h5 className="text-center text-l font-semibold mb-4">
        {moment(post?.datePost).format('MMM DD, YYYY') as string}
      </h5>
      <h2 className="text-5xl font-semibold text-center my-7">{post?.title}</h2>
      <h4 className="text-xl font-medium text-center my-7">{post?.header}</h4>
      <Image
        className="mx-auto w-full max-w-5xl"
        src={`/images${post?.img}`}
        height={200}
        width={200}
        alt="blog_image"
      />
      <p className="first-letter:text-7xl text-base md:text-lg md:w-3/4 mx-auto my-20 md:my-32">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
        sed doloremque magnam in dolore, delectus ab ullam repudiandae, quam
        voluptatum rerum facere necessitatibus. Pariatur voluptate velit
        deserunt saepe, ad placeat nam veritatis consectetur, officia minus
        iusto iste esse laudantium, impedit in exercitationem cupiditate minima
        illo? Qui explicabo alias ea commodi ab? Perferendis iure eligendi
        expedita libero repellat, atque nam voluptatibus nisi repudiandae
        sapiente repellendus quos, odio voluptas sed est ipsam illum! Eaque
        maxime, numquam perspiciatis, veniam sapiente illum, dolores porro dolor
        assumenda sed tenetur. Reiciendis dicta, molestias blanditiis facilis
        architecto alias officiis cupiditate, dignissimos incidunt hic
        voluptatum ullam magni quas veniam itaque fugit? Itaque, laudantium?
        Veniam, unde? Fugiat aut dolor sit, a ipsam repellendus ad laborum
        voluptas accusantium ipsum rem dolores voluptate natus non reprehenderit
        enim voluptates aliquam temporibus quae cum sed autem. Consequatur fuga
        vitae, itaque, iste doloribus perferendis quasi ducimus temporibus
        corporis sit modi nesciunt blanditiis! Nulla tenetur qui id, a iure quos
        laudantium libero delectus expedita iste dolorum cumque nihil eligendi
        facere animi quidem quaerat. Expedita voluptate officiis mollitia
        aliquam deleniti, odio quo recusandae ducimus sunt labore dolorum
        nesciunt? Necessitatibus odio reprehenderit dolorum non excepturi vel
        sapiente recusandae officia ducimus, ad soluta explicabo similique ipsam
        rem repellat veritatis laboriosam nulla doloremque cum! Explicabo saepe
        eligendi, ex quod modi exercitationem culpa in cumque adipisci cum.
        Fugit, voluptate neque porro sint quos minus repudiandae, et hic optio
        laborum mollitia atque doloremque consectetur deleniti consequatur
        assumenda quae magni autem iste sequi perferendis quis nemo explicabo.
        Dolores voluptatibus magnam officiis itaque sequi tenetur vero voluptas
        quia, doloribus error similique! Repellendus possimus quisquam odit
        culpa tempora hic assumenda labore earum, repudiandae molestias,
        dignissimos laborum veritatis ipsam! Aspernatur fuga hic cum ratione
        sequi distinctio nulla temporibus, pariatur laudantium enim optio?
        Nesciunt, similique dolorum praesentium, mollitia rem maxime quod aut
        corporis beatae ea esse?
      </p>
    </section>
  );
}
