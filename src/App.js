import { useEffect, useState } from "react";
import Header from "./components/layout/Header";

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
    console.log(theme);
  };

  return (
    <div className={`${styles.app} ${styles[theme]}`}>
      <Header toggleTheme={toggleTheme} setTheme={setTheme} />
    </div>
  );
}

export default App;
