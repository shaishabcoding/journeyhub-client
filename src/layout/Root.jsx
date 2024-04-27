import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Root = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark");

    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <div className="bg-white dark:bg-black font-open-sans">
      <div className="lg:px-28 lg:pt-6 ">
        <Fade>
          <Navbar {...{ isDarkMode, toggleDarkMode }}></Navbar>
        </Fade>
        {loading && <Loading></Loading>}
        <Outlet></Outlet>
      </div>
      <Fade>
        <Footer></Footer>
      </Fade>
    </div>
  );
};

export default Root;
