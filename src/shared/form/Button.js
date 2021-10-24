import { motion } from "framer-motion";

function Button({ children, disabled }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      type="submit"
      className="w-full p-2 text-lg rounded-md gradient"
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
export default Button;
