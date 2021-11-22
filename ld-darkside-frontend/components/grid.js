import { useFlags } from "launchdarkly-react-client-sdk";

export default function Grids() {
  const { darkMode, toggle } = useFlags();

  return (
        <div className="grid grid-cols-4 space-x-4 justify-center invisible sm:invisible md:visible">
          {toggle ? (   
          <div className="mx-auto col-span-4 xl:visible">
            <img src="./ld-white-wide.png" width="550" alt="launch-darkly" />
          </div>
          ): (
            <div className="grid grid-cols-4 col-span-4 space-x-4 justify-center">
          <div className={`${darkMode} shadow-2xl bg-ldgray py-3 px-3`}>
            <h1 className="text-2xl sm:text-base xl:text-2xl">Release Confidently</h1>
            <p className="text-ldgraytext text-xl invisible md:text-xl xl:text-xl sm:invisible md:invisible xl:visible">
            Deploy features whenever you want. Release to users when you’re ready.
            </p>
          </div>
          <div className={`${darkMode} shadow-2xl bg-ldgray py-3 px-3`}>
            <h1 className="text-2xl sm:text-base xl:text-2xl">Improve Reliability</h1>
            <p className="text-ldgraytext text-xl invisible md:text-xl xl:text-xl sm:invisible md:invisible xl:visible">
            Rest easy with instant rollbacks. Resolve incidents as soon as they happen.
            </p>
          </div>
          <div className={` ${darkMode} shadow-2xl  bg-ldgray  py-3 px-3`}>
            <h1 className="text-2xl sm:text-base xl:text-2xl">Safely Migrate Systems</h1>
            <p className="text-ldgraytext text-xl invisible md:text-xl xl:text-xl sm:invisible md:invisible xl:visible">
            Take the risk and uncertainty out of cloud, microservices, and database migrations.
            </p>
          </div>
          <div className={` ${darkMode} shadow-2xl bg-ldgray  py-3 px-3`}>
            <h1 className="text-2xl sm:text-base xl:text-2xl">Automate DevOps</h1>
            <p className="text-ldgraytext text-xl invisible md:text-xl xl:text-xl sm:invisible md:invisible xl:visible">
            Streamline your release process while ensuring enterprise compliance.
            </p>
          </div>
          </div>
          )}
        </div>
  );
}
