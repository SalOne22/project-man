'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const ProjectTabs = ({ projectId }: { projectId: string }) => {
  const pathname = usePathname();

  const links = [
    { href: `/projects/${projectId}`, text: 'Overview' },
    { href: `/projects/${projectId}/tasks`, text: 'Tasks' },
    { href: `/projects/${projectId}/files`, text: 'Files' },
    { href: `/projects/${projectId}/discussions`, text: 'Discussions' },
    { href: `/projects/${projectId}/milestones`, text: 'Milestones' },
    { href: `/projects/${projectId}/calendar`, text: 'Calendar' },
  ];

  return (
    <ul className="tabs">
      {links.map(({ href, text }) => {
        const isActive = pathname === href;

        return (
          <li key={href} className="flex-auto">
            <Link
              href={href}
              className={clsx(
                'tab tab-bordered tab-lg w-full',
                isActive && 'tab-active',
              )}
            >
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
