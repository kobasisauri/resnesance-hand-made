import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const HomeLayout = ({ toggleTheme, theme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />

      <div>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default HomeLayout;
