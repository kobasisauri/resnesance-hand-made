import { useEffect, useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import HomeLayout from "./components/layout/homeLayout";
import InnerLayout from "./components/layout/innerLayout";

import { Home, AboutUs, ContactUs, Error, Gallery, Shop } from "./pages";
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
      <div className={`${styles.app}`}>
        <Routes>
          <Route path="/" element={<Navigate replace="true" to="/home" />} />
          <Route
            path="/"
            element={<HomeLayout toggleTheme={toggleTheme} theme={theme} />}
          >
            <Route path="/home" element={<Home />} />
          </Route>
          <Route
            path="/"
            element={<InnerLayout toggleTheme={toggleTheme} theme={theme} />}
          >
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />

            <Route path="/404" element={<Error />} />
            <Route path="/*" element={<Navigate replace to="/404" />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
