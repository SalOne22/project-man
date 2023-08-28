import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { NavigationBar } from './NavigationBar';

export const Layout = () => {
  return (
    <>
      <Header />

      <div className="drawer sm:drawer-open">
        <input id="navigation" type="checkbox" className="drawer-toggle" />

        <main className="drawer-content">
          <Outlet />
        </main>

        <NavigationBar />
      </div>
    </>
  );
};