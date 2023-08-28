import Link from 'next/link';

import {
  Home,
  FolderOpen,
  CheckSquare,
  CalendarClock,
  Flag,
  Settings,
} from 'lucide-react';
import { UserButton } from './UserButton';

export const NavigationBar = () => {
  return (
    <aside className="drawer-side overflow-visible z-20">
      <label htmlFor="navigation" className="drawer-overlay"></label>
      <div className="p-1 h-full bg-base-300 flex flex-col">
        <nav>
          <ul className="menu gap-1">
            <li>
              <Link
                href="/"
                className="sm:tooltip sm:tooltip-right"
                data-tip="Home"
              >
                <Home />
                <span className="sm:hidden">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="sm:tooltip sm:tooltip-right"
                data-tip="Projects"
              >
                <FolderOpen />
                <span className="sm:hidden">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/tasks"
                className="sm:tooltip sm:tooltip-right"
                data-tip="Tasks"
              >
                <CheckSquare />
                <span className="sm:hidden">Tasks</span>
              </Link>
            </li>
            <li>
              <Link
                href="/calendar"
                className="sm:tooltip sm:tooltip-right"
                data-tip="Calendar"
              >
                <CalendarClock />
                <span className="sm:hidden">Calendar</span>
              </Link>
            </li>
            <li>
              <Link
                href="/reports"
                className="sm:tooltip sm:tooltip-right"
                data-tip="Reports"
              >
                <Flag />
                <span className="sm:hidden">Reports</span>
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="sm:tooltip sm:tooltip-right"
                data-tip="Settings"
              >
                <Settings />
                <span className="sm:hidden">Settings</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-2 flex-auto flex justify-center">
          <UserButton className="sticky self-end bottom-3" />
        </div>
      </div>
    </aside>
  );
};
