import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Home/Footer";
import MobileHeader from "../components/Home/MobileHeader";
import Navbar from "../components/Home/Navbar";
const Main = () => {
  return (
    <div>
      <Navbar />

      <div>
        <Outlet />
        <MobileHeader />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
