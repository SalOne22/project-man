import Link from 'next/link';
import Image from 'next/image';

import bg from '~/assets/images/404-bg.jpg';

export default function NotFound() {
  return (
    <section className="relative w-full h-screen">
      <Image
        alt="Mountains on sunset"
        src={bg}
        fill
        placeholder="blur"
        quality={100}
        sizes="100vw"
        className="w-full max-w-[2400px] h-[725px] object-cover"
      />
      <div
        style={{
          backgroundImage:
            'linear-gradient(30deg, rgb(1 1 1 / 20), transparent)',
        }}
        className="py-8 px-6 text-center sm:text-left absolute left-0 top-0
        w-full h-full flex flex-col items-center sm:items-start justify-center"
      >
        <h2 className="text-stone-100 text-4xl mb-4 ">404, Not Found 🤔</h2>
        <p className="text-stone-300 text-lg mb-3">
          Oops! It looks like you&apos;re lost... <br />
          But don&apos;t worry, we&apos;ll help you get back on track.
        </p>
        <Link href="/" className="btn btn-primary max-w-fit">
          Go Home
        </Link>
      </div>
    </section>
  );
}
