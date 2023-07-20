import { Link } from 'react-router-dom';
import bgSmall from 'assets/images/404/bg-mobile.jpg';
import bgMedium from 'assets/images/404/bg-tablet.jpg';
import bgLarge from 'assets/images/404/bg-desktop.jpg';

export const NotFound = () => {
  return (
    <section className="relative">
      <img
        srcSet={`${bgSmall} 640w, ${bgMedium} 1920w, ${bgLarge} 2400w`}
        src={bgMedium}
        width={2400}
        height={725}
        alt="Mountains on sunset"
        className="w-full max-w-[2400px] max-h-full
        object-cover h-screen"
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
          Oops! It looks like you're lost... <br />
          But don't worry, we'll help you get back on track.
        </p>
        <Link to="/" className="btn btn-primary max-w-fit">
          Go Home
        </Link>
      </div>
    </section>
  );
};
