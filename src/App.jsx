import { Signin } from "./Routes/Signin"
import { Signup } from "./Routes/Signup"
import { Home } from "./Routes/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom" 
import { AuthContext  } from "./Context/AuthContext";
import { Protected } from './Routes/Protected'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Protected><Home/></Protected>
    },
    {
      path:"/home",
      element:<Protected><Home/></Protected>
    },
    {
      path:"/signin",
      element:<Signin/>
    },
    {
      path:"/signup",
      element:<Signup/>
    }
  ])

  return (
    <div className="md:w-screen md:h-screen sm:w-[900px] sm:h-[900px]">
    <AuthContext>
    <RouterProvider router={router}></RouterProvider>
    </AuthContext>
    </div>
  )
}

export default App
