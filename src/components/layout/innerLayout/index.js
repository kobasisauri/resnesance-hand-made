import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
// import Footer from "../Footer/Footer";
import styles from "./styles.module.scss";

const InnerLayout = ({ toggleTheme }) => {
  return (
    <div className={styles.container}>
      <Header toggleTheme={toggleTheme} />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default InnerLayout;
