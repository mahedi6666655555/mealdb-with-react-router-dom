import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home'
import About from './components/all-a/About'
import Contact from './components/all-a/Contact'
import Order from './components/all-a/Order'


let router = createBrowserRouter(
  [
    {
      path: '/',

      element: <Home></Home>,

      children: [

        {
          path: "About",
          element: <About></About>
        },
        {
          path: "foods",
          element: <Contact></Contact>
        },
        {
          path: "Order",
          element: <Order></Order>
        },
      ]


    }
  ]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
