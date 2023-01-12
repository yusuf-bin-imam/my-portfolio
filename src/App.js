import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App ">
      <div className=" mx-auto">
        {" "}
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
