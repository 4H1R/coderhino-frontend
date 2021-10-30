import React from "react";
import { Link } from "react-router-dom";
import Head from "shared/elements/Head";

function Error404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center con md:text-left">
      <Head title="Not Found" desc="Not found page" />
      <div className="flex flex-col items-center md:flex-row md:space-x-4 md:divide-x-2">
        <h1 className="text-6xl font-bold text-gradient">404</h1>
        <div className="flex flex-col space-y-4 md:pl-4">
          <h1 className="text-6xl font-bold ">Page Not Found</h1>
          <h2 className="text-2xl text-gray-400">
            Please check the URL in the address bar and try again
          </h2>
        </div>
      </div>
      <Link to="/" className="p-2 mt-8 text-white rounded-md gradient">
        Go back home
      </Link>
    </div>
  );
}

export default Error404;
