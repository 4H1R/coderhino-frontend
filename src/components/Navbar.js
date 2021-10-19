import React, { useState, useEffect } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import logout from "../services/auth/logout";
import { userLoggedOut } from "../stores/userSlice";

function CustomNavLink({ to, children }) {
  return (
    <NavLink activeClassName="font-medium" to={to}>
      {children}
    </NavLink>
  );
}

function Links() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  async function handleLogout(dispatch) {
    await logout();
    dispatch(userLoggedOut());
  }
  return (
    <>
      <CustomNavLink to="/technologies">Technologies</CustomNavLink>
      <CustomNavLink to="/blog">Blog</CustomNavLink>
      <CustomNavLink to="/about">About</CustomNavLink>
      {isLoggedIn ? (
        <button
          className="p-2 rounded-md gradient"
          onClick={() => handleLogout(dispatch)}
        >
          Logout
        </button>
      ) : (
        <Link to="/login" className="p-2 rounded-md gradient">
          Get Started
        </Link>
      )}
    </>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    // user clicked on nav link so we should change the isOpen
    setIsOpen(false);
  }, [location.pathname]);
  // Todo add animations

  return (
    <div className="sticky top-0 flex flex-col py-4 font-light ">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Logo
        </Link>
        <button
          aria-label="Navbar Hamburger"
          onClick={() => setIsOpen(!isOpen)}
          className="visible sm:hidden"
        >
          {isOpen || <FaAlignJustify size={24} />}
          {isOpen && <p className="text-2xl font-medium">X</p>}
        </button>

        <div className="items-center justify-between hidden space-x-12 sm:flex">
          {/* Links for tablet and pc users */}
          <Links />
        </div>
      </div>
      {/* Links for mobile users */}
      {isOpen && (
        <div className="flex flex-col py-4 space-y-4 bg-black sm:hidden">
          <Links />
        </div>
      )}
    </div>
  );
}

export default Navbar;
