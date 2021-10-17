import React from "react";
import { Field, ErrorMessage as FormikErrorMessage } from "formik";
import { Link as ReactLink } from "react-router-dom";
import { motion } from "framer-motion";

export function ErrorMessage({ name }) {
  return (
    <FormikErrorMessage name={name} className="text-red-500" component="p" />
  );
}
export function Input({ type = "text", name, placeholder }) {
  return (
    <>
      <Field
        type={type}
        name={name}
        id={name}
        placeholder={
          placeholder ?? name.charAt(0).toUpperCase() + name.slice(1)
        } //Capitalize the first letter example email => Email
        className="w-full px-2 py-4 bg-gray-800 rounded-md focus:outline-black"
      />
      <ErrorMessage name={name} />
    </>
  );
}

export function Button({ children, disabled }) {
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

export function Link({ content, linkContent, to }) {
  return (
    <p className="my-4 text-center text-gray-400">
      {content} ?{" "}
      <ReactLink to={to} className="text-white underline">
        {linkContent}
      </ReactLink>
    </p>
  );
}
