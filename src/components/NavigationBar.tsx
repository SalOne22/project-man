import { NavLink } from 'react-router-dom';
import {
  Home,
  FolderOpen,
  CheckSquare,
  CalendarClock,
  Flag,
  Settings,
} from 'lucide-react';

export const NavigationBar = () => {
  return (
    <aside className="drawer-side overflow-visible">
      <label htmlFor="navigation" className="drawer-overlay"></label>
      <nav className="p-1 h-full bg-base-300">
        <ul className="menu gap-1">
          <li>
            <NavLink
              to="/"
              className="sm:tooltip sm:tooltip-right"
              data-tip="Home"
            >
              <Home />
              <span className="sm:hidden">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="sm:tooltip sm:tooltip-right"
              data-tip="Projects"
            >
              <FolderOpen />
              <span className="sm:hidden">Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tasks"
              className="sm:tooltip sm:tooltip-right"
              data-tip="Tasks"
            >
              <CheckSquare />
              <span className="sm:hidden">Tasks</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calendar"
              className="sm:tooltip sm:tooltip-right"
              data-tip="Calendar"
            >
              <CalendarClock />
              <span className="sm:hidden">Calendar</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className="sm:tooltip sm:tooltip-right"
              data-tip="Reports"
            >
              <Flag />
              <span className="sm:hidden">Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className="sm:tooltip sm:tooltip-right"
              data-tip="Settings"
            >
              <Settings />
              <span className="sm:hidden">Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
