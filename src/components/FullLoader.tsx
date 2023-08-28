import { createPortal } from 'react-dom';

export const FullLoader = () => {
  return createPortal(
    <div className="fixed h-screen w-screen bg-black/40 top-0 z-30 flex items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>,
    //? div with id loader always in index.html
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('loaders')!
  );
};