import React, { useState, useEffect, useContext, useCallback } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";

export default function Connection() {
  const { apiLocation } = useFlags();
  const [loc1, setloc1] = useState("INACTIVE");
  const [loc2, setloc2] = useState("INACTIVE");
  const [api1, setapi1] = useState("bg-ldred");
  const [api2, setapi2] = useState("bg-ldred");
  const [api2loc, setapi2loc] = useState("UNKNOWN");
  const [api1loc, setapi1loc] = useState("UNKNOWN");

  console.log(apiLocation);

  if (apiLocation === "tatooine") {
    console.log("test1");
    const ENDPOINT =
      window.location.protocol +
      "//" +
      window.location.host +
      "/api-2" +
      "/api/health";
    // api1 = 'bg-ldhl'
    // api2 = 'bg-ldred'
    fetch(ENDPOINT)
      .then((res1) => res1.json())
      .then((res1) => {
        setloc1(res1.status);
        setloc2("INACTIVE");
        if (res1.status != "healthy") {
          setapi1("bg-ldred");
          setapi2("bg-ldred");
        } else {
          setapi1("bg-ldblue");
          setapi2("bg-ldred");
          setapi1loc(res1.location);
        }
      });
  } else {
    console.log("test2");
    const ENDPOINT =
      window.location.protocol +
      "//" +
      window.location.host +
      "/api-1" +
      "/api/health";
    // api1 = 'bg-ldred'
    // api2 = 'bg-ldhl'
    fetch(ENDPOINT)
      .then((res2) => res2.json())
      .then((res2) => {
        setloc2(res2.status);
        setloc1("INACTIVE");
        if (res2.status != "healthy") {
          setapi2("bg-ldred");
          setapi1("bg-ldred");
        } else {
          setapi2("bg-ldblue");
          setapi1("bg-ldred");
          setapi2loc(res2.location);
        }
      });
  }

  return (
    <div className="flex mx-auto w-full space-x-4">
          <div
            className={`grid mx-auto justify-center items-center bg-ldgray w-1/2 shadow-2xl`}
          >
            <div>
              <h1 className="text-center font-bold text-ldgraytext text-4xl">
                {api1loc.toUpperCase()} API
              </h1>
            <div className={`overflow-hidden h-8 flex  pb-4 ${api1}`}>
              <p className="mx-auto text-black text-xl">{loc1}</p>
            </div>
            </div>
            </div>
          <div
            className={`grid mx-auto justify-center items-center bg-ldgray w-1/2 shadow-2xl`}
          >
            <div>
            <h1 className="text-center font-bold text-ldgraytext text-4xl">
              {api2loc.toUpperCase()} API
            </h1>
            <div className={`overflow-hidden h-8 flex ${api2}`}>
              <p className="mx-auto text-black text-xl">{loc2}</p>
            </div>
            </div>
          </div>
    </div>
  );
}
