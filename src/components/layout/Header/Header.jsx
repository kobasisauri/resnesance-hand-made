import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LightSwitch from "../../UI/LightSwitch";
import styles from "./Header.module.scss";

const navs = [
  { item: "HOME", link: "home" },
  { item: "GALLERY", link: "gallery" },
  { item: "SHOP", link: "shop" },
  { item: "ABOUT US", link: "about-us" },
  { item: "CONTACT US", link: "contact-us" },
];

const Header = ({ toggleTheme, theme, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${styles["header-container"]} ${styles[theme]}`}>
        <div className={styles.wrapper}>
          <div className={`${styles.container} ${styles[className]}`}>
            <div className={styles.logo}>
              <Link to="/">
                RENAISSANCE <br /> HAND MADE
              </Link>
            </div>

            <div className={styles.items}>
              {navs.map((nav, i) => (
                <div key={i}>
                  <NavLink
                    to={nav.link}
                    className={({ isActive, isPending }) =>
                      `${isPending ? "pending" : isActive ? styles.active : ""}`
                    }
                  >
                    {nav.item}
                  </NavLink>
                </div>
              ))}
            </div>

            <div className={styles["last-child-wrapper"]}>
              <LightSwitch toggleTheme={toggleTheme} />

              <div
                onClick={() => setOpen(!open)}
                className={`${styles["burger-wrapper"]} ${
                  open ? styles.open : styles.close
                }`}
              >
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className={`${styles["open-items"]} ${styles[theme]}`}>
          {navs.map((nav, i) => (
            <div key={i}>
              <NavLink
                to={nav.link}
                className={({ isActive, isPending }) =>
                  `${isPending ? "pending" : isActive ? styles.active : ""}`
                }
              >
                {nav.item}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
