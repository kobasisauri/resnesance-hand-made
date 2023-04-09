import { Link } from "react-router-dom";
// import { Fade } from "react-reveal";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link to="/">LLC RENAISSANCE HAND MADE</Link>
          </div>

          <div className={styles.email}>contact@renaissancehandmade.com</div>

          <div className={styles.text}>New York</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
