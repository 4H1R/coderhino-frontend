import React, { useState, useEffect } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

function CustomNavLink({ to, children }) {
  return (
    <NavLink activeClassName="font-medium" to={to}>
      {children}
    </NavLink>
  );
}

function Links() {
  return (
    <>
      <CustomNavLink to="/technologies">Technologies</CustomNavLink>
      <CustomNavLink to="/blog">Blog</CustomNavLink>
      <CustomNavLink to="/about">About</CustomNavLink>
      <Link to="/login" className="p-2 rounded-md gradient">
        Get Started
      </Link>
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
