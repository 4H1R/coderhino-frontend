import React from "react";
import { Link as ReactLink } from "react-router-dom";

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
