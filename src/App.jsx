
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "./App.css";
import { AppLayout } from "./components/Layout/AppLayout";
import { CountryDetails } from "./components/Layout/CountryDetails";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/country";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path:"/",
        element : <Home></Home>,
      },
      {
        path:"about",
        element : <About></About>,
      },
      {
        path:"country",
        element : <Country></Country>,
      },
      {
        path:"country/:id",
        element : <CountryDetails></CountryDetails>,
      },

      {
        path:"contact",
        element : <Contact></Contact>,
      },
    ],
  },

  

])

const App =()=>{
  return <RouterProvider router={router}></RouterProvider>

}

export default App;
