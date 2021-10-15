import React from "react";
import { Helmet } from "react-helmet-async";

function Head({ title, desc }) {
  return (
    <Helmet>
      <title>{title} - CodeRhino</title>
      <meta name="description" content={`${desc} - CodeRhino`} />
    </Helmet>
  );
}

export default Head;
