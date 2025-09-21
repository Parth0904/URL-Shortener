export default function Contact() {
  return (
    <main className="bg-purple-100 min-h-[90vh] flex items-center justify-center">
      <section className="max-w-2xl text-center px-6">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Got questions, feedback, or suggestions? We’d love to hear from you!
          Reach out to us anytime, and we’ll get back to you as soon as possible.
        </p>
        <div className="flex flex-col gap-3 items-center">
          <a
            href="mailto:support@example.com"
            className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow-lg font-semibold hover:bg-purple-600 transition"
          >
            Email Us
          </a>
          <a
            href="https://github.com/your-repo"
            target="_blank"
            className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow-lg font-semibold hover:bg-purple-600 transition"
          >
            Visit GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
