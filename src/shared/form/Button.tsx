import React from "react";
import { motion } from "framer-motion";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <motion.button {...props} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.button>
  );
}

export default Button;
