import { Link } from 'react-router-dom';
import bgSmall from '../assets/images/404/bg-mobile.jpg';
import bgMedium from '../assets/images/404/bg-tablet.jpg';
import bgLarge from '../assets/images/404/bg-desktop.jpg';
import bgUltraWide from '../assets/images/404/bg-ultra-wide.jpg';

const NotFound = () => {
  return (
    <section className="relative">
      <img
        srcSet={`${bgSmall} 640w, ${bgMedium} 768w, ${bgLarge} 1440w,
        ${bgUltraWide} 2400w`}
        sizes="(max-width: 640px) 640px, (max-width: 768px) 768px,
        (max-width: 1440px) 1440px, 2400px"
        src={bgMedium}
        width={2400}
        height={725}
        alt="Mountains on sunset"
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

export default NotFound;
