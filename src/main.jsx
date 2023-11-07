import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Sass/app.scss'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { MenuProvider } from './context/MenuProvider.jsx'

const router = createBrowserRouter([
  {
    path: "*",
    element: <App/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MenuProvider>

    <RouterProvider router={router}/>
    </MenuProvider>
  </React.StrictMode>,
)
