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
    <aside className="drawer-side">
      <label htmlFor="navigation" className="drawer-overlay"></label>
      <nav className="p-1 h-full bg-base-300">
        <ul className="menu gap-1">
          <li>
            <NavLink to="/">
              <Home />
              <span className="sm:hidden">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <FolderOpen />
              <span className="sm:hidden">Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks">
              <CheckSquare />
              <span className="sm:hidden">Tasks</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/calendar">
              <CalendarClock />
              <span className="sm:hidden">Calendar</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports">
              <Flag />
              <span className="sm:hidden">Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings">
              <Settings />
              <span className="sm:hidden">Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
