import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
