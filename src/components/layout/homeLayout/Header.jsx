import { Link, NavLink } from "react-router-dom";
import styles2 from "./styles.module.scss";

import styles from "./styles.module.scss";

import Image2 from "../../../assets/test.jpg";
import Image3 from "../../../assets/testest2.jpg";
import Image4 from "../../../assets/testtest3.jpg";
import Image1 from "../../../assets/testtest4.jpg";

import logo from "assets/whiteLogo.png";

const navs = [
  { item: "HOME", link: "home" },
  // { item: "GALLERY", link: "gallery" },
  { item: "SHOP", link: "shop" },
  { item: "ABOUT", link: "about-us" },
  { item: "CONTACT", link: "contact-us" },
];

function Header() {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles["inner-top"]}>
          <img
            src={Image1}
            alt="asd"
            style={{
              objectFit: "cover",
              width: "100%",
              position: "relative",
              height: "100%",
            }}
          />
          <div className={styles["top-title"]}>
            <div>
              <span>RENAISSANCE</span> HANDMADE
            </div>
            <div className={styles["small-text"]}>
              FALLEN TREES RECLAIMED & REBORN WITH BEAUTIFUL PURPOSE
              <span> BY PAYL KRUGER</span>
            </div>

            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <div className={styles.items}>
        {navs.map((nav, i) => (
          <div key={i}>
            <NavLink
              to={nav.link}
              className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? styles2.active : ""}`
              }
            >
              <span>{nav.item}</span> <div className={styles.line} />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
