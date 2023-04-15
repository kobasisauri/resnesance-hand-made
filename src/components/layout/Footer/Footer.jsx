import { Link } from "react-router-dom";
// import { Fade } from "react-reveal";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Link to="/">RENAISSANCE HANDMADE LLC</Link>
          </div>

          <div className={styles.email}>
            <Link to="/contact-us">contact@renaissancehandmade.com</Link>
          </div>

          <div className={styles.text}>New York</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
