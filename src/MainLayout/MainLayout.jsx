import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:w-[85%] mx-auto md:w-[90%] w-[95%] mt-7">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
