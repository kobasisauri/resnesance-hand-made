import React from "react";
import FooterImage from "../../../assets/2.JPG";

import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={FooterImage} alt="footer pic" />
      <div className={styles.logo}>RENAISSANCE HAND MADE</div>
      <div className={styles.email}>contact@renaissancehandmade.com</div>
      <div className={styles.text}>New York</div>
    </div>
  );
};

export default Footer;
