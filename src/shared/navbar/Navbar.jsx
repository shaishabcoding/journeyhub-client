import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { FiLogIn } from "react-icons/fi";
import { AuthContext } from "../../providers/auth/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all">All Tourists Spot</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/spots/new">Add Tourists Spot</NavLink>
          </li>
          <li>
            <NavLink to="/all">My List</NavLink>
          </li>
          <li className="md:hidden mt-2">
            <button
              className="btn btn-sm text-xs p-0 bg-white"
              onClick={logOut}
            >
              Logout <HiOutlineLogout />
            </button>
          </li>
        </>
      ) : (
        <>
          <div className="md:hidden">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </div>
        </>
      )}
    </>
  );
  return (
    <nav
      id="sidebar"
      className="navbar bg-gradient-to-l from-green-50 via-pink-50 to-sky-50 lg:rounded-lg"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu z-50 bg-gradient-to-br border border-gray-300 from-green-100 via-pink-100 to-sky-100 menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-base font-bold md:px-4 px-0 md:text-xl"
        >
          <span>JourneyHub</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center">
        {user ? (
          <>
            <div
              className="tooltip md:mr-4 tooltip-left lg:tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img
                src={user?.photoURL}
                className="w-10 lg:w-12 aspect-square object-center mr-2 lg:mr-0 rounded-full ring-4 ring-sky-500"
              />
            </div>
            <button
              className="btn bg-white hidden md:flex items-center justify-center"
              onClick={logOut}
            >
              Logout <HiOutlineLogout />
            </button>
          </>
        ) : (
          <div className="hidden md:flex gap-2">
            <Link to="/login" className="btn bg-white">
              Login <FiLogIn />
            </Link>
            <Link to="/register" className="btn bg-white">
              Register <FiLogIn />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
