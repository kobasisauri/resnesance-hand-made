import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const HomeLayout = ({ toggleTheme, theme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} className={"home"} theme={theme} />

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
