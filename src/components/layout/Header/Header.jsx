import { useState } from "react";
import LightSwitch from "../../UI/LightSwitch";
import styles from "./Header.module.scss";

const enam = {
  home: "HOME",
  gallery: "GALLERY",
  shop: "SHOP",
  about: "ABOUT US",
  contact: "CONTACT US",
};

const items = ["HOME", "GALLERY", "SHOP", "ABOUT US", "CONTACT US"];

const Header = ({ toggleTheme, theme }) => {
  const [active, setActive] = useState(enam.home);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${styles.container} ${styles[theme]}`}>
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
          <LightSwitch toggleTheme={toggleTheme} />
          <div
            onClick={() => setOpen(!open)}
            className={styles["burger-wrapper"]}
          >
            <div
              className={`${styles.burger} ${
                open ? styles.close : styles.openburger
              } `}
            />
            <div
              className={`${styles.burger} ${
                open ? styles.close : styles.openburger
              } `}
            />
            <div
              className={`${styles.burger} ${
                open ? styles.close : styles.openburger
              } `}
            />
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
