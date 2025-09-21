import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]"> 
        <div className="flex flex-col gap-4 h-[50vh] items-center justify-center">
          <p className="text-3xl font-bold">
            The best place to shorten your links
          </p>
          <p className="px-30 text-center"> 
            We are the most straightforward URL shortener in the world. You don't even need to create an account.we understand how important it is for you to have a simple and easy way to share your links with others.
          </p>
           <div className='flex gap-3'>
                <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
            </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken object-contain" src="/vector.jpg" alt="an imge of a vector" fill={true}  />
        </div>
      </section>
    </main>
  );
}
