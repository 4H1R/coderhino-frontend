import React from "react";
import { Field, ErrorMessage as FormikErrorMessage } from "formik";

export function ErrorMessage({ name }) {
  return (
    <FormikErrorMessage name={name} className="text-red-500" component="p" />
  );
}
function Input({ as = "input", type = "text", name, placeholder }) {
  return (
    <>
      <Field
        as={as}
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

export default Input;
