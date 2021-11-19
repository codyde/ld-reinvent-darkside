import React, { useState, useEffect, useContext, useCallback } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";

export default function Connection() {
  const { apiLocation } = useFlags();
  const [loc1, setloc1] = useState("INACTIVE")
  const [loc2, setloc2] = useState("INACTIVE")
  const [api1, setapi1] = useState("INACTIVE")
  const [api2, setapi2] = useState("INACTIVE")
  const [api2loc, setapi2loc] = useState("UNKNOWN")
  const [api1loc, setapi1loc] = useState("UNKNOWN")

  console.log(apiLocation)

  if (apiLocation === "tatooine") {
    console.log('test1')
    const ENDPOINT = window.location.protocol + "//" + window.location.host + "/api-2" + "/api/health"
    // api1 = 'bg-green-500'
    // api2 = 'bg-red-500'
    fetch(ENDPOINT).then((res1)=> res1.json()).then((res1) => {
      setloc1(res1.status)
      setloc2("INACTIVE")
      if (res1.status != "healthy") {
        setapi1('bg-red-500')
        setapi2('bg-red-500')
      } else {
        setapi1('bg-green-500')
        setapi2('bg-red-500')
        setapi1loc(res1.location)
      }
    })
  } else {
    console.log('test2')
    const ENDPOINT = window.location.protocol + "//" + window.location.host + "/api-1" + "/api/health"
    // api1 = 'bg-red-500'
    // api2 = 'bg-green-500'
    fetch(ENDPOINT).then((res2)=> res2.json()).then((res2) => {
      setloc2(res2.status)
      setloc1("INACTIVE")
      if (res2.status != "healthy") {
        setapi2('bg-red-500')
        setapi1('bg-red-500')
      } else {
        setapi2('bg-green-500')
        setapi1('bg-red-500')
        setapi2loc(res2.location)
      }
    })
  }

  return (
    <div className="mx-auto flex w-full space-x-4">
      <div className={`mx-auto bg-gray-800 w-1/2 h-full rounded-2xl px-4 py-4 shadow-2xl`}>
        <h1 className="text-center font-bold text-white text-4xl">
    <span className="text-red-800">{api1loc.toUpperCase()}</span> API
        </h1>
        <div
          className={`overflow-hidden h-8 flex rounded ${api1}`}
        ><p className="mx-auto text-white text-xl">{loc1}</p></div>
        <div>
          
        </div>
      </div>
      <div className={`mx-auto bg-gray-800 w-1/2 h-full rounded-2xl px-4 py-4 shadow-2xl`}>
        <h1 className="text-center font-bold text-white text-4xl">
    <span className="text-red-800">{api2loc.toUpperCase()}</span> API
        </h1>
        <div
          className={`overflow-hidden h-8 flex rounded ${api2}`}
        ><p className="mx-auto text-white text-xl">{loc2}</p></div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
