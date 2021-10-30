import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

function Heading({ children, className = "" }: HeadingProps) {
  return (
    <h1
      className={"mt-3 text-2xl font-bold text-center md:text-4xl " + className}
    >
      {children}
    </h1>
  );
}

export default Heading;
