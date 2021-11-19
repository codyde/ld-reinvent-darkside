import Head from "next/head";
import Info from "../components/info.js";
import Nav from "../components/Nav.js";
import Loginbox from "../components/loginbox.js";
import Connection from "../components/connection.js"
import Intro from "../components/intro.js";
import Grids from "../components/grid.js";
import "semantic-ui-css/semantic.min.css";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const { uiEnable, showCards, toggle, userLogin, darkMode, apiConfig } = useFlags();
  const LDClient = useLDClient();
  return (
    <div className="h-screen">
      <Head>
        <title>Exploring LaunchDarkly</title>
        <meta name="description" content="Built for exploring LaunchDarkly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#00000",
            color: "#fffff",
          },
          // Default options for specific types
          success: {
            icon: "🚀",
            style: {
              fontSize: 22,
              background: "green",
              color: "white",
            },
          },
          error: {
            icon: "⚠️",
            style: {
              fontSize: 22,
              background: "orange",
              color: "white",
            },
          },
        }}
      />

      {uiEnable ? (
        <main className="grid grid-cols-4 bg-gray-800 md:bg-ld-space md:bg-cover">
          <div className="grid col-start-1 justify-center items-center bg-gray-900 px-8">
            <Nav />
          </div>
          <div className="grid col-start-2 col-span-3">
            <div className="grid grid-rows-3 h-screen">
              {toggle ? (
                <div className="grid col-span-4 row-start-1 justify-center items-center">
                  <img className="py-5" src="./toggle_thumbsup.png" width="200"  alt="launch-darkly" />
                </div>
              ) : (
                <div className="grid col-span-4 row-start-1 justify-center items-center">
                  <img src="./ld-white.png" width="250" alt="launch-darkly" />
                </div>
              )}
              <div className="grid col-span-4 m-auto mx-auto row-start-2 w-3/4 py-4 p-5">
                {apiConfig ?
                  <Connection />
                  :
                  <Loginbox />
                }
              </div>
              <div className="grid col-span-4 mx-auto row-start-3 w-3/4 justify-center items-center">
                {showCards ? <Grids /> : <div />}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className="bg-gray-800 md:bg-ld-space md:bg-cover ">
          <div className="grid grid-cols-4 h-screen">
            <div className="grid bg-gray-900 text-white col-start-1 justify-center items-center px-8">
              {userLogin ? (
                <div>
                  <Nav />
                </div>
              ) : (
                <Intro />
              )}
            </div>
            <div className="grid col-start-2 w-full col-span-3 justify-center items-center">
              <Info />
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
