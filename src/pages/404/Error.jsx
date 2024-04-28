import { Link } from "react-router-dom";
import { BsArrowReturnRight } from "react-icons/bs";
import { useEffect } from "react";
import { Zoom } from "react-awesome-reveal";
import Lottie from "lottie-react";
import errorAnim from "./error-anim.json";

const Error = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);
  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row bg-gradient-to-bl from-green-50  dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500 items-center justify-center p-10">
      <div className="flex-1 p-6 md:p-10 lg:p-20">
        <Zoom>
          <Lottie animationData={errorAnim} className="w-full" />
        </Zoom>
      </div>
      <Zoom className="flex-1 mr-4 md:mr-8 lg:mr-16">
        <div className="w-full">
          <h2 className="text-3xl font-bold">Oops! Page Not Found</h2>
          <p className="my-4">
            Uh-oh! It seems like we have hit a snag on our digital journey. The
            page you are seeking seems to have taken an unexpected detour,
            perhaps off the beaten path or into the depths of cyberspace. Fear
            not, though! While this particular corner of the internet might be
            elusive at the moment, there are still plenty of adventures to be
            had. Take a moment to recalibrate your coordinates, double-check the
            URL for any hidden treasures (or typos), and if all else fails,
            return to our trusty homepage where new quests await. And remember,
            in the grand tapestry of the web, every lost link is just a chance
            for a new discovery. Happy exploring!
          </p>
          <Link
            to="/"
            className="btn btn-accent dark:bg-gray-700 dark:text-white dark:border-gray-400"
          >
            Back to homepage <BsArrowReturnRight />
          </Link>
        </div>
      </Zoom>
    </div>
  );
};

export default Error;
