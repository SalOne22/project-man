import { ProjectItem, ProjectItemProps } from './ProjectItem';

export type ProjectListProps = {
  projects: ProjectItemProps[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ul className="flex flex-wrap gap-6 justify-center sm:justify-normal">
      {projects.map(({ id, ...rest }) => (
        <ProjectItem key={id} id={id} {...rest} />
      ))}
    </ul>
  );
};
