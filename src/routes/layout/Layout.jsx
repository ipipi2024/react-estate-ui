import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./layout.scss"

const Layout = () => {
  return (
    <div className="layout">
      <div className="">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
