import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { NotFound } from '../pages/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
