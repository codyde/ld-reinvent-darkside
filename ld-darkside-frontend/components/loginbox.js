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
        <div className={`flex bg-ldred justify-center items-center h-full shadow-2xl`}>
          <form>
            <h1 className="grid text-center font-bold text-white text-4xl">
              Identity secured, {userState.key}
            </h1>
            <div className="flex mx-auto m-auto align-middle justify-center py-2 px-4 space-x-4">
              <button
                type="input"
                className="bg-ldblue text-white text-base px-2 py-2 "
                onClick={getUser.bind(userState)}
              >
                Get Current User
              </button>
              <button
                type="input"
                className="bg-ldblue text-white text-base px-2 py-2"
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
