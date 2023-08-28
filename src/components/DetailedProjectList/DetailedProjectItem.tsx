import Link from 'next/link';

export type DetailedProjectItemProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  status: string;
  completedTasks: number;
  totalTasks: number;
  startDate: string;
  endDate?: string | null;
};

export const DetailedProjectItem = ({
  id,
  name,
  description,
  technologies,
  status,
  completedTasks,
  totalTasks,
  startDate,
  endDate,
}: DetailedProjectItemProps) => {
  const completedPercentage = ((completedTasks / totalTasks) * 100).toFixed(1);

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
    <div
      className="card bg-base-200 shadow-xl p-4
      hover:shadow-primary/10 hover:shadow-2xl transition-shadow
      duration-700 ease-in-out"
    >
      <h3 className="font-bold text-2xl flex flex-wrap items-start justify-between mb-4">
        <Link href={`/projects/${id}`}>{name}</Link>
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
      <p className="mb-1 mt-auto font-mono">
        {completedPercentage}% {completedTasks} / {totalTasks} Tasks completed
      </p>
      <progress
        className="progress progress-success mb-2"
        value={completedPercentage}
        max={100}
      ></progress>
      <p>
        {startDate} - {endDate ?? 'now'}
      </p>
    </div>
  );
};
