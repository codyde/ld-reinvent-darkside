import React, { useState, useEffect } from "react";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";
import { rollIn, zoomInDown, zoomInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { login, logout } from "./auth.js";
import toast, { Toaster } from "react-hot-toast";

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
};

export default function Loginbox() {
  const { loginBoxColor, brandImage } = useFlags();
  const LDClient = useLDClient();

  const [userState, setUserState] = useState({
    username: "",
  });

  useEffect(() => {
    setUserState(LDClient.getUser())
    console.log(userState)
  }, [])

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const user = {
    key: userState.username,
  };

  const submitUser = (e) => {
    e.preventDefault();
    login(user);
    LDClient.identify(user).then(console.log(LDClient.getUser()));
    toast.success("Your LaunchDarkly user is " + userState.username);
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  const getUser = (e) => {
    e.preventDefault();
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

  const submitLogout = (e) => {
    e.preventDefault();
    logout();
    LDClient.identify(JSON.parse('{"key":"anonymous"}'));
    toast.error("You have cleared the login cache");
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

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

  // useEffect(() => {
  //   getCachedAuth();
  // }, []);

  return (
    <StyleRoot>
        <div className={`bg-red-800 w-full rounded-2xl p-4 shadow-2xl`}>
          <form>
            <h1 className="text-center font-bold text-white text-4xl">
              Identity secured, {userState.key}
            </h1>
            {/* <p className="mx-auto font-normal invisible md:visible text-white my-6 max-w-lg">
              This login field will create a user object with the LaunchDarkly
              SDK. This user object can be used to interact with targeting rules
              allowing specific feature configurations to be enabled or disabled
              based on users.
            </p> */}
            {/* <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
              <input
                className="text-base text-gray-400 flex-grow outline-none px-2 "
                type="input"
                id="username"
                placeholder="Enter Username"
                value={userState.username}
                onChange={handleChange}
              />
              <div className="flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                <button
                  type="submit"
                  className="bg-green-500 text-white text-base rounded-lg px-4 py-2 font-thin"
                  onClick={submitUser.bind(userState)}
                >
                  Submit
                </button>
              </div>
            </div> */}
            <div className="flex mx-auto align-middle justify-center py-2 px-4 space-x-4">
              <button
                type="input"
                className="bg-purple-500 text-white text-base rounded-lg px-2 py-2 "
                onClick={getUser.bind(userState)}
              >
                Get Current User
              </button>
              <button
                type="input"
                className="bg-yellow-500 text-white text-base rounded-lg px-2 py-2"
                onClick={submitLogout.bind(userState)}
              >
                Clear Current User
              </button>
            </div>
          </form>
        </div>
    </StyleRoot>
  );
}
