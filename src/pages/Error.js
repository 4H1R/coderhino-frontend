import React from "react";
import { motion } from "framer-motion";

function Error({ onClick }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: [0, 50, 100] }}
        className="text-2xl font-bold text-center text-white"
      >
        Sorry we got an error please try again later.
      </motion.h1>
      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="px-3 py-2 font-bold text-white rounded gradient"
      >
        Try again
      </motion.button>
    </div>
  );
}

export default Error;
