import React, { useState, useEffect } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import logout from "../services/auth/logout";
import { userLoggedOut } from "../stores/userSlice";
import { motion } from "framer-motion";

const variants = {
  open: {},
  closed: {},
};

function AnimatedDiv({ children, className = "", isOpen }) {
  return (
    <motion.nav
      className={className}
      variants={variants}
      animate={isOpen ? "open" : "closed"}
    >
      {children}
    </motion.nav>
  );
}

function CustomNavLink({ to, children }) {
  return (
    <NavLink className="text-white" activeClassName="font-bold" to={to}>
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
          className="w-full p-2 rounded-md gradient"
          onClick={() => handleLogout(dispatch)}
        >
          Logout
        </button>
      ) : (
        <Link className="p-2 rounded-md gradient" to="/login">
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
          {isOpen || (
            <motion.div initial={{ rotate: 45 }} animate={{ rotate: 0 }}>
              <FaAlignJustify size={24} />
            </motion.div>
          )}
          {isOpen && (
            <motion.p
              initial={{ rotate: -45 }}
              animate={{ rotate: 0 }}
              className="text-2xl font-medium"
            >
              X
            </motion.p>
          )}
        </button>
        <div className="items-center justify-between hidden space-x-12 sm:flex">
          {/* Links for tablet and pc users */}
          <Links />
        </div>
      </div>
      {/* Links for mobile users */}
      {isOpen && (
        <AnimatedDiv
          isOpen={isOpen}
          className="flex flex-col py-4 space-y-4 bg-black sm:hidden"
        >
          <Links />
        </AnimatedDiv>
      )}
    </div>
  );
}

export default Navbar;
