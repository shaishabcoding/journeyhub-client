import { Link } from "react-router-dom";
import { BsArrowReturnRight } from "react-icons/bs";
import { useEffect } from "react";
import { Zoom } from "react-awesome-reveal";

const Error = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);
  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row bg-gradient-to-bl from-green-50  dark:from-gray-700 via-pink-50 dark:via-gray-800 to-sky-50 dark:to-gray-700 dark:text-white dark:border-gray-500 items-center justify-center p-10">
      <div className="flex-1">
        <Zoom>
          <img
            src="https://i.ibb.co/Lpg4T3s/error.png"
            alt="404 img"
            className="dark:bg-gray-400 dark:rounded-lg dark:saturate-50"
          />
        </Zoom>
      </div>
      <Zoom className="flex-1">
        <div className="w-full">
          <h2 className="text-3xl font-bold">Oops! Page Not Found</h2>
          <p className="my-4">
            We are sorry, but the page you are looking for cannot be found. It
            seems that the page you are trying to access might have been moved,
            deleted, or it could be temporarily unavailable. Please check the
            URL for any typos, or go back to the homepage and try navigating
            from there. If you continue to encounter this issue, feel free to
            contact our support team for assistance.
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
