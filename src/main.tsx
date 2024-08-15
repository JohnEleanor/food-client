import React from 'react'
import ReactDOM from 'react-dom/client'

import './app/globals.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Jchart from './pages/Jchart.tsx'
import Login from './pages/login.tsx'
import Dashboard from './pages/dashboard.tsx'
import ErrorNotFound from './pages/notfound.tsx'


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "Dashboard",
    element: <Dashboard/>,
  },
  {
    path: "chart",
    element: <Jchart/>,
  },
  {
    path: "*",
    element: <ErrorNotFound/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
