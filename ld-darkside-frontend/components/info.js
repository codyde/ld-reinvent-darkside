import React, { useState, useEffect } from "react";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";
import { fadeInUp, rollIn, zoomInDown, zoomInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import toast, { Toaster } from "react-hot-toast";
import { login, logout } from "./auth.js";

const styles = {
  rollin: {
    animation: "x 1s",
    animationName: Radium.keyframes(rollIn, "rollIn"),
  },
  bounce: {
    animation: "x 3s",
    animationName: Radium.keyframes(zoomInDown, "zoomInDown"),
  },
  zoomleft: {
    animation: "x 3s",
    animationName: Radium.keyframes(zoomInLeft, "zoomInLeft"),
  },
  fadeup: {
    animation: "x 5s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp")
  }
};

export default function Info() {
  const { loginBoxColor, brandImage, userLogin } = useFlags();
  const LDClient = useLDClient();

  const [userState, setUserState] = useState({
    username: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // TODO: Create a form that allows submission of a user object
  // Long TODO: Refactor mesh demo apps login/db engine to support this
  // const user = {
  //   key: "UUID64",
  //   email: "codydearkland@gmail.com",
  //   firstName: "Cody",
  //   lastName: "De Arkland",
  // };

  const user = {
    key: userState.username,
  };

  const submitUser = (e) => {
    e.preventDefault()
    login(user);
    LDClient.identify(user).then(console.log(LDClient.getUser()));
    toast.success("Your LaunchDarkly user is " + userState.username);
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  const getUser = () => {
    const curUser = LDClient.getUser();
    console.log(curUser.anonymous);
    if (
      curUser.anonymous ||
      curUser.key == null ||
      curUser.key == "anonymous"
    ) {
      toast.error("You are using the Anonymous user");
      return curUser;
    }
    toast.success("Your LaunchDarkly user is " + curUser.key);
    return curUser;
  };

  const submitLogout = () => {
    logout();
    LDClient.identify(JSON.parse('{"key":"anonymous"}'));
    toast.error("You have cleared the login cache");
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  var brandLocation;
  if (brandImage == true) {
    brandLocation = "/ld2.png";
  } else {
    brandLocation = "/ld.png";
  }

  function getCachedAuth() {
    const auth = localStorage.getItem("user_key");
    if (auth) {
      var cachedUser = JSON.parse(auth).key;
      console.log(cachedUser);
      return auth;
    }
    console.log("No cached storage found");
    return;
  }

  useEffect(() => {
    getCachedAuth();
  }, []);

  return (
    <StyleRoot>
      {userLogin ? (
        <div className="flex justify-center items-center">
          <div
            className={`bg-ldgray w-full p-10 px-28 shadow-2xl`}
          >
            <form>
              <h1 className="text-center font-bold text-ldgraytext text-4xl">
                Login With Your Username
              </h1>
              <p className="mx-auto font-normal text-ldgraytext my-6 max-w-lg">
                This login field will create a user object with the LaunchDarkly
                SDK. This user object can be used to interact with targeting
                rules allowing specific feature configurations to be enabled or
                disabled based on users.
              </p>
              <div className="flex items-center bg-white overflow-hidden px-2 py-1 justify-between">
                <input
                  className="text-base text-gray-400 flex-grow outline-none px-2 "
                  type="input"
                  id="username"
                  placeholder="Enter Username"
                  value={userState.username}
                  onChange={handleChange}
                />
                <div className="flex items-center px-2 space-x-4 mx-auto ">
                  <button
                    type="submit"
                    className="bg-ldblue text-white text-base px-4 py-2 font-thin"
                    onClick={submitUser.bind(userState)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div style={styles.fadeup}>
          <div className="grid mx-auto justify-center h-1/3 items-middle shadow-2xl bg-ldgray px-28 py-28">
          <img className="mx-auto h-full" src="./ld-white-wide.png" width="550" alt="launch-darkly" />
            <div className="mx-auto py-8 h-full text-3xl text-transparent bg-clip-text bg-gradient-to-br from-ldyellow to-lddblue text-center italic">
              A long time ago, at a re:Invent far, far, away... 
            </div>
          {/* </div> */}
          </div>
          </div>
      )}
    </StyleRoot>
  );
}
