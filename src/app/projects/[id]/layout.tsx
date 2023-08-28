import { ProjectTabs } from '~/components/ProjectTabs';

export default function ProjectOverviewLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <>
      <ProjectTabs projectId={id} />
      <section>{children}</section>
    </>
  );
}
