import { useState } from "react";
import { Link } from "react-router-dom";
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
const links = ["home", "gallery", "shop", "about-us", "contact-us"];

const Header = ({ toggleTheme, theme, className }) => {
  const [active, setActive] = useState(enam.home);
  const [open, setOpen] = useState(false);
  console.log(theme);

  console.log();

  return (
    <>
      <div
        className={`${styles.container} ${styles[theme]} ${styles[className]}`}
      >
        <div className={styles.logo}>
          RENAISSANCE <br /> HAND MADE
        </div>
        <div className={styles.items}>
          {items.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(item)}
              className={item === active ? styles.active : ""}
            >
              <Link className={styles.links} to={links[i]}>
                {item}
              </Link>
            </div>
          ))}
        </div>
        <div className={styles["last-child-wrapper"]}>
          {!className && <LightSwitch toggleTheme={toggleTheme} />}

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
              <Link className={styles.links} to={links[i]}>
                {item}
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
