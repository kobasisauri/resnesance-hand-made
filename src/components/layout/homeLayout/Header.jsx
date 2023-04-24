import styles from "./styles.module.scss";
import logo from "assets/whiteLogo.png";

function Header() {
  return (
    <>
      <div className={styles.top}>
        <div className={styles["top-title"]}>
          <div>RENAISSANCE HANDMADE</div>

          <img src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Header;
