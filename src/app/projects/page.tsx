import { DetailedProjectList } from '~/components/DetailedProjectList';
import projects from '~/mock/projects.json';

export default function Projects() {
  return (
    <section className="py-8 px-6 flex flex-col items-center sm:items-start">
      <DetailedProjectList projects={projects} />
    </section>
  );
}
