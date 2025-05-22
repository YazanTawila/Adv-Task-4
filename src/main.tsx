import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.tsx'
import About from './Pages/About.tsx'
import Root from './Pages/Root.tsx'
import Service from './Pages/Service.tsx'


const routers  = createBrowserRouter([
    {
      path : "/",
      element : <Root/>,
      children : [
      {
        path: "",
        element : <Home/>
      },
      {
        path: "/about",
        element : <About/>
      },
      {
        path: "/service",
        element : <Service/>
      },
      ]
    }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routers}/>
  </StrictMode>,
)
