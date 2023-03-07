import React, { useState } from "react";
import styles from "./LightSwitch.module.scss";

import { Moon, Sun } from "../../icons";

const LightSwitch = ({ toggleTheme }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setActive(!active);
        toggleTheme();
      }}
    >
      <div className={styles.child}>
        <Moon />
      </div>
      <div className={styles.child}>
        <Sun />
      </div>

      <div
        className={`${styles.switch} ${
          active ? styles.active : styles.notActive
        }`}
      />
    </div>
  );
};

export default LightSwitch;
