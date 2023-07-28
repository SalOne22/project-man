import { Link } from 'react-router-dom';

export type ProjectItemProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  status: string;
  startDate: string;
  endDate?: string | null;
};

export const ProjectItem = ({
  id,
  name,
  description,
  technologies,
  status,
  startDate,
  endDate,
}: ProjectItemProps) => {
  let statusClass;
  switch (status.toLowerCase()) {
    case 'in progress':
      statusClass = 'badge-primary';
      break;
    case 'completed':
      statusClass = 'badge-success';
      break;
    case 'on hold':
      statusClass = 'badge-warning';
      break;
    default:
      statusClass = 'badge-ghost';
      break;
  }

  return (
    <li className="card bg-base-300 shadow-lg w-full max-w-[24rem] p-4">
      <h3 className="text-xl flex flex-wrap items-baseline justify-between mb-4">
        <Link to={`/projects/${id}`}>{name}</Link>
        <span className={`badge ${statusClass}`}>{status}</span>
      </h3>

      <p className="text-lg line-clamp-4 mb-2">{description}</p>
      <ul className="flex flex-wrap gap-2 mb-2">
        {technologies.map((tech) => (
          <li key={tech} className="badge badge-ghost badge-outline">
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex justify-between items-baseline">
        <p>
          {startDate} - {endDate ?? 'now'}
        </p>
        <button
          type="button"
          className="btn btn-sm btn-outline btn-success ml-auto"
        >
          Add task
        </button>
      </div>
    </li>
  );
};
