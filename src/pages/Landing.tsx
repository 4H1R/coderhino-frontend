import { useAppSelector } from "app/hooks";
import React from "react";

function Landing() {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div>
      <h1>{user.username}</h1>

      <h1>This is landing</h1>
    </div>
  );
}

export default Landing;
