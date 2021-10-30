import React from "react";
import { Helmet } from "react-helmet-async";

type HeadProps = {
  title: string;
  desc: string;
};
function Head({ title, desc }: HeadProps) {
  return (
    <Helmet>
      <title>{title} - CodeRhino</title>
      <meta name="description" content={`${desc} - CodeRhino`} />
    </Helmet>
  );
}

export default Head;
