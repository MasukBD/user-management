import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import ErrorPage from './SharedComponent/ErrorPage';
import Homepage from './Pages/Homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-2xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
