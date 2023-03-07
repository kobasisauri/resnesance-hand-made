import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer/Footer";
import IMG from "./assets/mmm.jpeg";

import styles from "./App.module.scss";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem("theme")));
  }, []);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));

    localStorage.setItem(
      "theme",
      JSON.stringify(theme === "light" ? "dark" : "light")
    );
  };

  return (
    <div className={styles[theme]}>
      <div className={`${styles.app} `}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <img src={IMG} alt="kutui" />
        <img src={IMG} alt="kutui" />
        <img src={IMG} alt="kutui" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
