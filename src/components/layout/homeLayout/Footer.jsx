import { Link } from "react-router-dom";
import logo from "assets/whiteLogo.png";
import facebook from "assets/fb.png";
import insta from "assets/insta.png";
import pinterest from "assets/pinterest.png";
import styles from "./styles.module.scss";

import Image1 from "../../../assets/testtest4.jpg";

function Footer() {
  return (
    <footer>
      <div className={styles["footer-main"]}>
        <img src={logo} alt="logo" className={styles.logo} />

        <span className={styles["social-title"]}>
          Get a sneak peek of new pieces by following us on:
        </span>

        <ul>
          <li>
            <a href=".">
              <img src={insta} alt="insta" />
            </a>
          </li>
          <li>
            <a href=".">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href=".">
              <img src={pinterest} alt="pinterest" />
            </a>
          </li>
        </ul>

        <div className={styles["company-details"]}>
          646-257-9480 | 140 58th Street, Brooklyn New York, 11220 |{" "}
          <span>
            <Link to="/contact-us">contact@renaissancehandmade.com</Link>
          </span>
        </div>

        <div className={styles.rights}>
          Fallen Industry is a registered trademark. © 2023 All Rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
