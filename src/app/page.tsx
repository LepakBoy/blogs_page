import BlogCard from './components/blogCard/blogCard';

export default function Home() {
  return (
    <main>
      <div className="grid md:grid-cols-2 gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </main>
  );
}
