// import { logout } from "@/redux/features/auth/authSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Switch } from "../ui/switch";

type TNavbarProps = {
  handleThemeSwitch: () => void;
};

const Navbar: React.FC<TNavbarProps> = ({ handleThemeSwitch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const isAuthenticated = useAppSelector((state) => state.auth.user);
  // const dispatch = useAppDispatch();
  // console.log(isAuthenticated);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <header className="">
      <nav className="flex items-center justify-between text-white max-w-7xl w-full mx-auto fixed top-0 left-0 right-0 z-50 bg-slate-800 bg-opacity-40 p-3">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-2xl sm:text-[30px] font-semibold leading-9 mb-2 sm:mb-0"
          >
            <span className="text-primary text-white">Food Supply</span>
            <br />
            <span className="font-thin text-lg md:pl-8">Management</span>
          </Link>
        </div>
        <div className="flex items-center flex-col sm:flex-row">
          <button
            className={`${
              isMenuOpen ? "text-primary transform rotate-45" : "text-current"
            } sm:hidden text-xl focus:outline-none transition-transform duration-300`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <>&#10006;</> : <>&#9776;</>}
          </button>
          <ul
            className={`${
              isMenuOpen ? "flex flex-col items-center" : "hidden"
            } sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0 transition-all duration-300`}
          >
            <Switch onClick={handleThemeSwitch} />
            <NavLink
              to="/"
              className="text-base font-medium leading-6"
              onClick={toggleMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/all-supplies"
              className="text-base font-medium leading-6"
              onClick={toggleMenu}
            >
              All Supplies
            </NavLink>

            <NavLink
              to="/volunteer"
              className="text-base font-medium leading-6"
              onClick={toggleMenu}
            >
              About Us
            </NavLink>

            <NavLink
              to="/dashboard"
              className="text-base font-medium leading-6"
              onClick={toggleMenu}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/login"
              className="text-base font-medium leading-6"
              onClick={toggleMenu}
            >
              Login
            </NavLink>

            {/* {isAuthenticated ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="text-base font-medium leading-6"
                  onClick={toggleMenu}
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="text-base font-medium leading-6"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="text-base font-medium leading-6"
                onClick={toggleMenu}
              >
                Login
              </NavLink>
            )} */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
