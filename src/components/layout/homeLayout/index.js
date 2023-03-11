import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

import styles from "./styles.module.scss";

const HomeLayout = ({ toggleTheme, theme }) => {
  return (
    <div className={styles.container}>
      <Header toggleTheme={toggleTheme} className={"home"} theme={theme} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
