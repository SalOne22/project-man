'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Menu } from 'lucide-react';

import Logo from '~/assets/logo.svg';

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="navbar bg-base-200">
      <div className="navbar-start sm:hidden">
        <label htmlFor="navigation" className="btn btn-ghost drawer-button">
          <Menu />
        </label>
      </div>

      <div className="navbar-center sm:navbar-start">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image
            src={Logo}
            alt="Logo"
            width={20}
            height={20}
            style={{
              width: '1em',
              height: '1em',
            }}
          />
          <h1>Project Man</h1>
        </Link>
      </div>

      <div className="navbar-end">
        <AnimatePresence>
          {isSearchOpen && (
            <motion.input
              initial={{ y: -120 }}
              animate={{ y: 0 }}
              exit={{ y: -120 }}
              transition={{ ease: 'backInOut' }}
              placeholder="Search..."
              className="input input-bordered input-sm mr-4
                absolute right-0 top-20 sm:top-0 sm:relative z-10"
            />
          )}
        </AnimatePresence>

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
