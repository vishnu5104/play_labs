import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Studio from './routes/Studio';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/studio', element: <Studio /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
