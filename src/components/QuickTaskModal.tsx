import { createPortal } from 'react-dom';
import { nanoid } from 'nanoid';
import { Modal } from './Modal';

type Props = {
  title: string;
  open: boolean;
  onClose: () => void;
};

export const QuickTaskModal = ({ title, open, onClose }: Props) => {
  const nameInputId = nanoid();
  const textAreaId = nanoid();
  const dateInputId = nanoid();
  const prioritySelectId = nanoid();

  return createPortal(
    <Modal open={open} onClose={onClose}>
      <button
        onClick={onClose}
        type="button"
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      >
        ✕
      </button>
      <h3 className="font-bold text-lg mb-4">Quick task for {title}</h3>
      <form className="form-control">
        <label htmlFor={nameInputId} className="label">
          <span className="label-text">Task Name</span>
        </label>
        <input
          id={nameInputId}
          type="text"
          placeholder="Write task name"
          className="input input-bordered input-sm"
        />
        <label htmlFor={textAreaId} className="label">
          <span className="label-text">Task Description</span>
        </label>
        <textarea
          id={textAreaId}
          className="textarea textarea-bordered"
          placeholder="Describe your task..."
        ></textarea>
        <label htmlFor={dateInputId} className="label">
          <span className="label-text">Due Date</span>
        </label>
        <input
          id={dateInputId}
          type="date"
          className="input input-bordered input-sm"
        />
        <label htmlFor={prioritySelectId} className="label">
          <span className="label-text">Priority</span>
        </label>
        <select
          defaultValue="medium"
          id={prioritySelectId}
          className="select select-bordered select-sm mb-8"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button className="btn btn-success btn-sm">Add</button>
      </form>
    </Modal>,
    document.getElementById('modals')!
  );
};
