import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

// import Image2 from "../../../assets/test.jpg";
// import Image3 from "../../../assets/testest2.jpg";
// import Image4 from "../../../assets/testtest3.jpg";
import Image1 from "assets/testtest4.jpg";
import logo from "assets/logo.png";

import styles2 from "./styles.module.scss";
import styles from "./styles.module.scss";

const navs = [
  { item: "HOME", link: "home" },
  // { item: "GALLERY", link: "gallery" },
  { item: "SHOP", link: "shop" },
  { item: "ABOUT", link: "about-us" },
  { item: "CONTACT", link: "contact-us" },
];

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 35,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor:
          theme.palette.mode === "dark" ? "#2ECA45" : "rgb(157, 151, 142)",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

function Header({ toggleTheme }) {
  return (
    <>
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
              CUSTOM HANDMADE
              <span> HARDWARE </span>
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

        <div className="ms-3">
          <FormControlLabel
            control={
              <IOSSwitch sx={{ m: 1 }} defaultChecked onChange={toggleTheme} />
            }
          />
        </div>
      </div>
    </>
  );
}

export default Header;
