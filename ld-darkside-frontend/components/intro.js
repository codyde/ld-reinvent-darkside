import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";

export default function Intro() {
  const { UserLogin } = useFlags();

  return (
        <div>
        <h1 className="text-aws text-3xl">Welcome from LaunchDarkly at AWS reInvent!</h1>
        <p className="text-xl">
          Join the <span className="text-red-400">Dark Side</span> and jump to
          lightspeed with LaunchDarkly. The canyon you're going to blast womprats
          through is the same one a developer would navigate when using
          LaunchDarkly to roll out new features to users and teams.
        </p>
        <p className="text-xl">
          Whether you're running{" "}
          <span className="text-aws">EKS (Elastic Kubernetes Service)</span>, or
          deploying straight to{" "}
          <span className="text-aws">ECS (Elastic Container Service)</span>,
          building VMs in <span className="text-aws">EC2</span>, or a becoming one
          with the <span className="text-aws">Lambda</span>, dark-launching is the
          path to unmatched abilities that allow you ship code faster, and release
          features more often.
        </p>
        <h1 className="text-xl text-aws">
          GETTING STARTED: Head into the LaunchDarkly tab and select the{" "}
          <span className="text-blue-400 font-bold">userLogin</span> flag, and
          become one with the dark side of launching
        </h1>
      </div>
  );
}
