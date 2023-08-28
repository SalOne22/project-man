import clsx from 'clsx';
import Image from 'next/image';

export const UserButton = ({ className }: { className?: string }) => {
  return (
    <div className={clsx('dropdown dropdown-right dropdown-end', className)}>
      <label tabIndex={0} className="avatar flex items-center">
        <div className="w-12 rounded-full bg-slate-400">
          <Image
            src="https://images.unsplash.com/photo-1692794180903-492910e2c5a4"
            alt="User avatar"
            width={48}
            height={48}
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-20 menu p-2 shadow bg-base-200 rounded-box w-52 ml-6"
      >
        <li>
          <a>Login</a>
        </li>
        <li>
          <a>Register</a>
        </li>
      </ul>
    </div>
  );
};
