import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="items-center justify-center">
      <h1 className="text-4xl font-bold text-white">About</h1>
      <br />
      <br />
      <div>
        <h2 className="text-3xl font-bold text-white">Developers</h2>
        <br />
        <ul className="text-2xl text-white">
          <li>Ali Alizadeh</li>
          <li>Paul Pavlinskyi</li>
          <li>Owen Burnett</li>
        </ul>
        <br />
        <br />
        <h2 className="text-3xl font-bold text-white">Dependencies Used</h2>
        <br />
        <div className="min-h-screen ">
          <div className="justify-center text-2xl text-white">
            <label for="framermotionimage">Framer Motion</label>
            <img
              id="framermotionimage"
              src="src/framermotionimage.jpeg"
              alt="Framer Motion Logo"
            />
            <br />
            <label for="reactqueryimage">React Query</label>
            <img
              id="reactqueryimage"
              src="src/reactqueryimage.png"
              alt="React Query Logo"
            />
            <br />
            <label for="reactrouterdomimage">React Router DOM</label>
            <img
              id="reactrouterdomimage"
              src="src/reactrouterdomimage.png"
              alt="React Router DOM Logo"
            />
            <br />
            <label for="reduxlogoimage">Redux</label>
            <img
              id="reduxlogoimage"
              src="src/reduxlogoimage.png"
              alt="Redux Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
