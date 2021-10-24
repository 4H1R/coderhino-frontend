import Error from "pages/Error";
import Splash from "pages/Splash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "services/auth/me";
import { setUser, userIsNotLoggedIn } from "stores/userSlice";

function Bootstrap({ children }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [tryCounter, setTryCounter] = useState(0);
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getMe()
      .then((data) => {
        setHasError(false);
        dispatch(setUser(data));
      })
      .catch((err) => {
        if (err?.response?.status === 401) {
          dispatch(userIsNotLoggedIn());
        }
        // Server Error
        setHasError(true);
      });
  }, [tryCounter, dispatch]);

  return (
    <>
      {isLoggedIn === null && !hasError && <Splash />}
      {isLoggedIn === null && hasError && (
        <Error
          onClick={() => {
            setTryCounter(tryCounter + 1);
            setHasError(false);
          }}
        />
      )}
      {isLoggedIn !== null && children}
    </>
  );
}

export default Bootstrap;
