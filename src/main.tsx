import React from 'react'
import ReactDOM from 'react-dom/client'

import './app/globals.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import Home from './pages/Home.tsx'
import Home2 from './pages/Home2.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <Home/>,
  },
  {
    path: "home2",
    element: <Home2/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
