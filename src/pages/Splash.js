import React from "react";
import { motion } from "framer-motion";

function Splash() {
  return (
    <div className="flex items-center justify-center min-h-screen space-x-4">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: [0, 50, 100] }}
        className="text-4xl font-bold text-white"
      >
        Code Rhino
      </motion.h1>
    </div>
  );
}

export default Splash;
