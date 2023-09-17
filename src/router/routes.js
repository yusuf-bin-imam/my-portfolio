import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import About from "../components/Home/About";
import Blog from "../pages/Blog";
import Contact from "../components/Home/Contact";
import ContactDetails from "../pages/ContactDetails";
import Error from "../components/Home/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/contactDetails",
        element: <ContactDetails />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },

      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export default router;
