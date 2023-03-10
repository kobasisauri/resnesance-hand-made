import React, { useState, useEffect } from "react";

import styles from "./Home.module.scss";

import Main from "../../assets/main.JPG";

import pic1 from "../../assets/1.JPG";
import pic2 from "../../assets/2.JPG";
import pic3 from "../../assets/3.JPG";
import pic4 from "../../assets/6.png";
import pic5 from "../../assets/pic5.jpg";
import pic6 from "../../assets/7.jpeg";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.section}`}>
        <img src={Main} alt="main" />
      </div>
      <div className={`${styles.section}`}>
        <img src={pic4} alt="pic1" />
      </div>
      <div className={`${styles.section}`}>
        <img src={pic2} alt="pic2" />
      </div>
      <div className={`${styles.section}`}>
        <img src={pic3} alt="pic3" />
      </div>
      <div className={`${styles.section}`}>
        <img src={pic1} alt="pic14" />
      </div>
      <div className={`${styles.section}`}>
        <img src={pic5} alt="pic15" />
      </div>
      <div className={`${styles.section}`}>
        <img src={pic6} alt="pic6" />
      </div>
    </div>
  );
};

export default Home;
