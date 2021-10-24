import React from "react";
import { useSelector } from "react-redux";

function Landing() {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h1>{user.username}</h1>

      <h1>This is landing</h1>
    </div>
  );
}

export default Landing;
