import { ProjectTabs } from '~/components/ProjectTabs';
import project from '~/mock/full-project.json';

export default function ProjectOverviewLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const completedPercentage = (
    (project.completedTasks / project.totalTasks) *
    100
  ).toFixed(1);

  let statusClass;

  switch (project.status.toLowerCase()) {
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
    <>
      <section className="py-8 px-6 flex flex-col items-center sm:items-start">
        <h2 className="font-bold text-3xl flex flex-wrap items-baseline gap-4 justify-between mb-4">
          {project.name}
          <span className={`badge badge-lg ${statusClass}`}>
            {project.status}
          </span>
        </h2>
        <ul className="flex flex-wrap gap-2 mb-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="badge badge-ghost badge-outline">
              {tech}
            </li>
          ))}
        </ul>
        <p className="text-lg line-clamp-4 mb-2 max-w-xl">
          {project.description}
        </p>
        <p className="mb-1 mt-auto font-mono">
          {completedPercentage}% {project.completedTasks} / {project.totalTasks}{' '}
          Tasks completed
        </p>
        <progress
          className="progress progress-success mb-2 max-w-sm"
          value={completedPercentage}
          max={100}
        ></progress>
        <p>
          {project.startDate} - {project.endDate ?? 'now'}
        </p>
      </section>
      <ProjectTabs projectId={id} />
      <section className="py-8 px-6 flex flex-col items-center sm:items-start">
        {children}
      </section>
    </>
  );
}
