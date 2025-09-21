import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 h-[50vh] md:h-[60vh]">
        {/* Left Content */}
        <div className="flex flex-col gap-6 h-full items-center justify-center px-6 md:px-12 text-center md:text-left">
          <p className="text-3xl md:text-4xl font-bold text-gray-900">
            The best place to shorten your links
          </p>
          <p className="text-gray-700 md:text-lg px-4 md:px-0">
            We are the most straightforward URL shortener in the world. You do not even need to create an account. We understand how important it is for you to have a simple and easy way to share your links with others.
          </p>
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <Link href="/shorten">
              <button className="bg-purple-500 rounded-lg shadow-lg px-6 py-2 font-bold text-white hover:bg-purple-600 transition">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-purple-500 rounded-lg shadow-lg px-6 py-2 font-bold text-white hover:bg-purple-600 transition">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end items-center relative">
          <Image
            className="mix-blend-darken object-contain"
            src="/vector.jpg"
            alt="an image of a vector"
            fill={true}
          />
        </div>
      </section>
    </main>
  );
}
