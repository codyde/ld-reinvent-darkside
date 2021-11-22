import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";

export default function Intro() {
  const { UserLogin } = useFlags();

  return (
        <div>
        <h1 className="text-white text-3xl">Welcome from LaunchDarkly at AWS re:Invent!</h1>
        <p className="text-ldgraytext text-xl">
          Join the <span className="text-ldred">Dark Side</span> and jump to
          lightspeed with LaunchDarkly. The canyon you're going to blast womprats
          through is the same one a developer would navigate when using
          LaunchDarkly to roll out new features to users and teams.
        </p>
        <p className="text-ldgraytext text-xl">
          Whether you're running{" "}
          <span className="text-ldhl">EKS (Elastic Kubernetes Service)</span>, or
          deploying straight to{" "}
          <span className="text-ldhl">ECS (Elastic Container Service)</span>,
          building VMs in <span className="text-ldhl">EC2</span>, or a becoming one
          with the <span className="text-ldhl">Lambda</span>, <span className="text-ldhl font-bold">Dark Launching</span> is the
          path to unmatched abilities that allow you ship code faster, and release
          features more often.
        </p>
        <h1 className="text-xl text-white ">
          GETTING STARTED: Head into LaunchDarkly and enable the 
          <span className="text-ldhl font-bold"> Login Box</span> flag to begin your journey to the <span className="text-ldred">Dark Side</span>
        </h1>
      </div>
  );
}
