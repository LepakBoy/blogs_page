import Link from 'next/link';
import BlogCard from './components/blogCard/blogCard';

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-6xl md:text-8xl font-extrabold text-center py-9 md:py-14">
          Life styles
        </h1>
        <h3 className="text-center mx-auto font-bold text-2xl md:text-4xl py-12 w-[240px] md:w-[440px]">
          Not just an ordinary blog by{' '}
          <Link
            href="/"
            className="underline underline-offset-2 text-green-800"
          >
            Lepakboy
          </Link>
        </h3>
      </div>
      <section className="grid md:grid-cols-2 gap-7">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
    </main>
  );
}
