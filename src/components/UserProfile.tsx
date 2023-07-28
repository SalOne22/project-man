export const UserProfile = () => {
  return (
    <div className="flex">
      <div className="avatar mr-4">
        <div className="w-24 rounded-full">
          <img
            src="https://placehold.co/96"
            alt="User avatar"
            width={96}
            height={96}
          />
        </div>
      </div>
      <div>
        <h2 className="text-stone-100 text-4xl mb-1">username</h2>
        <a href="mailto:user@example.com">user@example.com</a>
        <div className="flex gap-2 mt-2">
          <p className="badge badge-neutral">Projects: 5</p>
          <p className="badge badge-primary">Assigned: 23</p>
        </div>
      </div>
    </div>
  );
};
