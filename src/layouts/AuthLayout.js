import React from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import { ReactComponent as Image } from "assets/svg/authBanner.svg";
import GoogleLogin from "react-google-login";
import { GOOGLE_CLIENT_ID } from "config";
import axios from "libs/axios";

const responseGoogle = (response) => {
  const tokenId = response.tokenId;
  axios
    .post("/api/google/", { auth_token: tokenId })
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
};

function AuthLayout({ title, children }) {
  return (
    <div className="grid grid-cols-1 space-x-2 md:grid-cols-2 md:mt-14">
      <div>
        <h1 className="text-3xl font-bold tracking-wide text-center">
          {title}
        </h1>
        <div className="flex flex-col justify-center mt-10 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="flex flex-col items-center p-2 space-x-4 border rounded-md md:flex-row md:px-4 hover:text-black hover:bg-white "
              >
                <FaGoogle size={22} />
                <p className="inline-block pt-1">Login With Google</p>
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
          />
          <button className="flex flex-col items-center p-2 space-x-4 border rounded-md md:flex-row md:px-4 hover:text-black hover:bg-white">
            <FaApple size={26} />
            <p className="inline-block pt-1">Login With Apple</p>
          </button>
        </div>
        <p className="my-2 mt-4 text-center text-gray-400">-- OR --</p>
        {children}
      </div>
      <div className="hidden md:flex">
        <Image width="100%" />
      </div>
    </div>
  );
}

export default AuthLayout;
