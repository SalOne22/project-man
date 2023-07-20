import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';
import { Search, Menu } from 'lucide-react';
import { ReactComponent as Logo } from 'assets/logo.svg';

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchTransition = useTransition(isSearchOpen, {
    from: {
      y: -50,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    leave: {
      y: -50,
      opacity: 0,
    },
  });

  return (
    <header className="navbar bg-base-200">
      <div className="navbar-start sm:hidden">
        <label htmlFor="navigation" className="btn btn-ghost drawer-button">
          <Menu />
        </label>
      </div>

      <div className="navbar-center sm:navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <Logo width="1em" height="1em" />
          <h1>Project Man</h1>
        </Link>
      </div>

      <div className="navbar-end">
        {searchTransition(
          (style, item) =>
            item && (
              <animated.input
                style={style}
                placeholder="Search..."
                className="input input-bordered input-sm mr-4
                absolute right-0 top-20 sm:top-0 sm:relative z-10"
              />
            )
        )}
        <button
          onClick={() => setIsSearchOpen((prev) => !prev)}
          className="btn btn-ghost btn-circle"
        >
          <Search />
        </button>
      </div>
    </header>
  );
};
