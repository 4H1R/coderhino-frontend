import React from "react";
import { Field, ErrorMessage as FormikErrorMessage } from "formik";

type ErrorMessageProps = {
  name: string;
};

export function ErrorMessage({ name }: ErrorMessageProps) {
  return (
    <FormikErrorMessage name={name} className="text-red-500" component="p" />
  );
}
type InputProps = {
  as?: "input" | "textarea";
  type?: "text" | "email" | "password";
  name: string;
  placeholder?: string;
};

function Input({ as = "input", type = "text", name, placeholder }: InputProps) {
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
