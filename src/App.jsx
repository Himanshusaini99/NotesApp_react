import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Paste from "./components/Paste"
import ViewContent from "./components/ViewContent"
import Home  from "./components/Home"
import Navbar from "./components/Navbar"
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path:"/pastes/:id",
      element: 
      <div>
        <Navbar/>
        <ViewContent/>
      </div>
    }
  ]
)


function App(){

  return (
    <div className=' bg-black flex justify-center items-center flex-col text-white min-h-screen'>
      {location.pathname === "/" && (
        <h1 className="text-4xl mb-6">CREATE YOUR NOTES</h1>
      )}
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
