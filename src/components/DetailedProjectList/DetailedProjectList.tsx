import {
  DetailedProjectItem,
  type DetailedProjectItemProps,
} from './DetailedProjectItem';

type DetailedProjectListProps = {
  projects: DetailedProjectItemProps[];
};

export const DetailedProjectList = ({
  projects = [],
}: DetailedProjectListProps) => {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
      {projects.map(({ id, ...rest }) => (
        <DetailedProjectItem key={id} id={id} {...rest} />
      ))}
    </ul>
  );
};
