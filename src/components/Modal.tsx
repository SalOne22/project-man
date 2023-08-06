import clsx from 'clsx';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export const Modal = ({ children, open, onClose }: Props) => {
  const modalClasses = clsx(
    'modal modal-bottom sm:modal-middle',
    open && 'modal-open'
  );

  return createPortal(
    <div className={modalClasses}>
      <div className="modal-box overflow-x-visible">{children}</div>
      <div className="modal-backdrop">
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    //? div with id modals always in index.html
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('modals')!
  );
};
