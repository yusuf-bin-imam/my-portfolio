import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/ContactDetails";
import ContactDetails from "../components/ContactDetails";
import Error from "../components/Error";
import Home from "../components/Home";
import MyProject from "../components/MyProject";
import Main from "../Layout/Main";
import Projects from "../components/Projects";

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
      // {
      //   path: "/project",
      //   element: <MyProject />,
      // },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
export default router;
