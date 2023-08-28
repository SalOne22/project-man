import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { FullLoader } from './FullLoader';
import React from 'react';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<FullLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
