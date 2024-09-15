import React from 'react'
import ReactDOM from 'react-dom/client'

import './app/globals.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Jchart from './pages/Jchart.tsx';
import Login from './pages/login.tsx';
import ErrorNotFound from './pages/notfound.tsx';
import SettingPage from './pages/setting.tsx';
import Home from './pages/home.tsx';
import History from './pages/history.tsx';
import Register from './pages/register.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "Dashboard",
    element: <Home/>,
  },
  {
    path: "chart",
    element: <Jchart/>,
  },
  {
    path: "setting", 
    element: <SettingPage/>,
  },
  {
    path: "history",
    element: <History/>,
  },
  {
    path: "register",
    element: <Register/>,
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
