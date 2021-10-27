import React from "react";
import { Link as ReactLink } from "react-router-dom";
import { default as AnimatedButton } from "shared/form/Button";

type LinkProps = {
  content: string;
  linkContent: string;
  to: string;
};

export function Link({ content, linkContent, to }: LinkProps) {
  return (
    <p className="my-4 text-center text-gray-400">
      {content} ?{" "}
      <ReactLink to={to} className="text-white underline">
        {linkContent}
      </ReactLink>
    </p>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  disabled: boolean;
};
export function Button({ children, ...props }: ButtonProps) {
  return (
    <AnimatedButton
      className="w-full p-2 text-lg rounded-md gradient"
      type="submit"
      {...props}
    >
      {children}
    </AnimatedButton>
  );
}
