import { ProjectList } from 'components/ProjectList';
import { UserProfile } from 'components/UserProfile';
import projects from 'assets/exampleProjects.json';

const Home = () => {
  return (
    <section className="py-8 px-6 flex flex-col items-center sm:items-start">
      <div className="mb-8">
        <UserProfile />
      </div>
      <ProjectList projects={projects} />
    </section>
  );
};

export default Home;
