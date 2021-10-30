import React from "react";
import frameMotionImage from "assets/images/framermotionimage.jpeg";
import reactQueryImage from "assets/images/reactqueryimage.png";
import reactRouterDomImage from "assets/images/reactrouterdomimage.png";
import reduxImage from "assets/images/reduxlogoimage.png";
import Head from "shared/elements/Head";

type HeadingProps = {
  children: React.ReactNode;
};

function Heading({ children }: HeadingProps) {
  return (
    <h1 className="text-4xl font-bold text-center text-gradient">{children}</h1>
  );
}

function About() {
  return (
    <div className="space-y-4">
      <Head title="About" desc="About Page" />
      <Heading>Developers</Heading>
      <ul className="text-2xl text-white">
        <li>Ali Alizadeh</li>
        <li>Paul Pavlinskyi</li>
        <li>Owen Burnett</li>
      </ul>
      <Heading>Dependencies Used</Heading>
      <div className="flex flex-col space-y-4 text-2xl ">
        <h2>Framer Motion</h2>
        <img
          className="w-1/2 md:w-1/4"
          src={frameMotionImage}
          alt="Framer Motion Logo"
        />
        <h2>React Query</h2>
        <img
          className="w-1/2 md:w-1/4"
          src={reactQueryImage}
          alt="React Query Logo"
        />
        <h2>React Router DOM</h2>
        <img
          className="w-1/2 md:w-1/4"
          src={reactRouterDomImage}
          alt="React Router DOM Logo"
        />
        <h2>Redux</h2>
        <img className="w-1/2 md:w-1/4" src={reduxImage} alt="Redux Logo" />
      </div>
    </div>
  );
}

export default About;
