import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { NotFound } from '../pages/NotFound';
import { Home } from 'pages/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
