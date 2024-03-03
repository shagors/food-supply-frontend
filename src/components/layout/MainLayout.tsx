import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "@/pages/Footer";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark:bg-black dark:bg-opacity-60">
      <Navbar handleThemeSwitch={handleThemeSwitch} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
