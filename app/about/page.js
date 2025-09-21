export default function About() {
  return (
    <main className="bg-purple-100 min-h-[90vh] flex items-center justify-center">
      <section className="max-w-2xl text-center px-6">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-purple-600">our URL shortener</span> —
          the simplest way to share links. We believe in speed, simplicity,
          and privacy. That’s why you don’t even need an account to use our service.
          <br /><br />
          Whether you’re sharing a project, a resource, or a memory, we make
          sure your links are short, clean, and easy to use.
        </p>
      </section>
    </main>
  );
}
