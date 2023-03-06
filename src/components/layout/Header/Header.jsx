import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";

import styles from "./Header.module.scss";

const enam = {
  home: "HOME",
  gallery: "GALLERY",
  shop: "SHOP",
  about: "ABOUT US",
  contact: "CONTACT US",
};

const items = ["HOME", "GALLERY", "SHOP", "ABOUT US", "CONTACT US"];

const Header = ({ toggleTheme, setTheme }) => {
  const [active, setActive] = useState(enam.home);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>RENAISSANCE HAND MADE</div>
        <div className={styles.items}>
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(item)}
              className={item === active ? styles.active : ""}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={styles["last-child-wrapper"]}>
          <div className={styles.logo2} onClick={toggleTheme}>
            LOGO
          </div>

          <div
            onClick={() => setOpen(!open)}
            className={styles["burger-wrapper"]}
          >
            <div className={`${styles.burger} ${open ? styles.close : ""} `} />
            <div className={`${styles.burger} ${open ? styles.close : ""} `} />
            <div className={`${styles.burger} ${open ? styles.close : ""} `} />
          </div>
        </div>
      </div>
      {open && (
        <div className={styles["open-items"]}>
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(item)}
              className={item === active ? styles.active : ""}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
