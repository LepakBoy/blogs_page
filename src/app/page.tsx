export default function HomePage() {
  return (
    <section className="py-16">
      <h3 className="text-2xl font-semibold">Hi there...</h3>
      <h1 className="text-4xl font-bold text-emerald-800">
        Welcome to our simple humble blog page!
      </h1>
      <p className="py-5 md:w-3/4 w-full">
        Welcome to our website! Here, you can read various articles and even
        write your own. If you'd like to contribute by writing an article, you
        can include an image to go along with your post. To ensure a secure and
        personalized experience, we require users to authenticate before they
        can write and post articles. We offer two convenient authentication
        options: <span className="font-semibold">Google</span> and{' '}
        <span className="font-semibold"> GitHub</span>. Simply log in with your
        preferred account and start sharing your thoughts with our community!
      </p>
    </section>
  );
}
