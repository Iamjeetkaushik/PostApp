import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts, { loader as postLoader } from '../routes/Posts';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewPost, { action as postActions } from '../routes/NewPost';
import RootLayout from '../routes/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        children: [{ path: '/Modal', element: <NewPost /> }],
        loader: postLoader,
        action: postActions,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
