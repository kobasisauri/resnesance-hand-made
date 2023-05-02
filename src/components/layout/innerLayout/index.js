import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../homeLayout/Header";
import Footer from "../homeLayout/Footer";
import styles from "./styles.module.scss";

const InnerLayout = ({ toggleTheme, theme }) => {
  return (
    <div className={styles.container}>
      <Header toggleTheme={toggleTheme} theme={theme} />

      <div className={styles.wrapper}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default InnerLayout;
