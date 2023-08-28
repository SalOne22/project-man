import projects from '~/mock/projects.json';

import { ProjectList } from '~/components/ProjectList';
import { UserProfile } from '~/components/UserProfile';

export default function Home() {
  return (
    <section className="py-8 px-6 flex flex-col items-center sm:items-start">
      <div className="mb-8">
        <UserProfile />
      </div>
      <ProjectList projects={projects} />
    </section>
  );
}
