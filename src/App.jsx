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
    <div className=' bg-black flex justify-center items-center flex-col text-white min-h-screen px-4 sm:px-8'>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
