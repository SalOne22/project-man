import Image from 'next/image';

export const UserProfile = () => {
  return (
    <div className="flex">
      <div className="avatar mr-4">
        <div className="w-24 h-24 rounded-full bg-slate-400">
          <Image
            src="https://images.unsplash.com/photo-1692794180903-492910e2c5a4"
            alt="User avatar"
            width={96}
            height={96}
          />
        </div>
      </div>
      <div>
        <h2 className="dark:text-stone-100 text-4xl mb-1">username</h2>
        <a href="mailto:user@example.com">user@example.com</a>
        <div className="flex gap-2 mt-2 flex-wrap">
          <p className="badge badge-neutral">Projects: 5</p>
          <p className="badge badge-primary">Assigned: 23</p>
        </div>
      </div>
    </div>
  );
};
