import { useEffect, useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
// import HomeLayout froms "./components/layout/homeLayout";
import InnerLayout from "./components/layout/innerLayout";

import {
  Home,
  AboutUs,
  ContactUs,
  Error,
  Gallery,
  Shop,
  ShopItem,
} from "./pages";
import styles from "./App.module.scss";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem("theme")) || "dark");
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
      <Routes>
        <Route path="/" element={<Navigate replace="true" to="/home" />} />

        <Route
          path="/"
          element={<InnerLayout toggleTheme={toggleTheme} theme={theme} />}
        >
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopItem />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          <Route path="/404" element={<Error />} />
          <Route path="/*" element={<Navigate replace to="/404" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
