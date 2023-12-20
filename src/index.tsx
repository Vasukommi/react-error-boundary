import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import Layout from './layout/Layout';
import ComponentError from './components/faulty-components/ComponentError';
import FetchError from './components/faulty-components/FetchError';
import InternetError from './components/faulty-components/InternetError';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "component-error",
        element: <ComponentError />,
      },
      {
        path: "fetch-error",
        element: <FetchError />,
      },
      {
        path: "no-internet-error",
        element: <InternetError />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);