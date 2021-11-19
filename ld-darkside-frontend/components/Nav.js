import React, { useState, useEffect } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";

export default function Nav(props) {
  const { showCards, uiEnable, userLogin, darkMode, apiConfig, toggle, apiLocation } = useFlags();
  return (
    <div>
      {userLogin && !uiEnable && !showCards && darkMode == "text-black" && !apiConfig ? (
        <div className="text-xl">
          <h1 className="text-aws">You sense the presence of a Dark Launch.</h1>
          <p className="text-xl">
            Great shooting, kid! You just launched your first feature! Enabling
            the <span className="text-blue-400 font-bold">userLogin</span> flag
            released the new code into your application faster than your
            favorite smugglers can escape an Empire patrol.
          </p>
          <p className="text-xl text-aws">
            Return to LaunchDarkly and select the
            <span className="text-blue-400 font-bold"> uiEnable</span> flag. Add
            your first name to the "Target Individual Users" section in
            lowercase.
          </p>

          <p className="text-xl">
            Targeting rules allow us to apply feature releases and configurations to specific users
            or larger groups and segments. This allows us to release and
            rollback features at any scale. In this example we're targeting a single member of our Rebel Alliance. 
          </p>

          <p className="text-xl text-aws">
            Once your task is complete, return here and enter your username and click the submit
            button.
          </p>
        </div>
      ) : (
        <div />
      )}

      {uiEnable && userLogin && !showCards && darkMode === "text-black" && !apiConfig ? (
        <div>
          <h1 className="text-aws text-3xl">
            An elegant tool for a more civilized age
          </h1>
          <p className="text-white text-xl">
            When we submitted our username in the previous screen, the
            LaunchDarkly client used this to create a user object. This user was
            evaluated against the targeting rule we created and resolved the
            flag and value we configured.
          </p>
          <p className="text-aws text-xl">
            Navigate back into LaunchDarkly and select the{" "}
            <span className="text-blue-400 font-bold">showCards</span> flag. Add
            your user to the target once again, save and enable the flag. When
            you return back, things should look different once again...
          </p>
        </div>
      ) : (
        <div />
      )}

      {userLogin && uiEnable && showCards && darkMode == "text-black" && !apiConfig ? (
        <div>
          <h1 className="text-aws text-3xl">
            I sense a disturbance in the Feature.
          </h1>
          <p className="text-xl text-white">
            We have some text at the bottom of the page that is too dark to
            read. We can hit the eject and rollback in milliseconds or push a
            new configuration.
          </p>
          <p className="text-aws text-xl">
            Return to LaunchDarkly and inspect the{" "}
            <span className="text-blue-400 font-bold">darkMode</span> flag. This
            flag is a string flag meaning it will deliver text, instead of a
            true/false. We're using this flag to push color configuration to the
            dark text on the screen. 
          </p>
          <p className="text-aws text-xl">
          Set S-Foils in lock position and enable
            that feature.
          </p>
        </div>
      ) : (
        <div />
      )}
      {userLogin && uiEnable && showCards && darkMode == "text-white" && !apiConfig && apiLocation == "tatooine" && !toggle ? (
        <div>
          <h1 className="text-aws text-3xl">
            The <span className="text-red-800">Dark Side</span> is strong with
            you.
          </h1>
          <p className="text-xl text-aws"> With the flick of your wrist, you were able to remove a problem feature from production faster than an energy sword cutting through a bulkhead. The Dark Side flows through you.</p>

          <p className="text-xl text-aws">
            When you've got an Empire or a Rebellion on your heels - getting an evacuation coordinated requires orchstrating at scale. Return to LaunchDarkly and select <span className="text-blue-500">segments</span> from the left navigation bar. Select the <span className="text-blue-500">Dark Side</span> segment and add your user to the included users list.
             </p>
             <p className="text-white text-xl">
          <span className="text-blue-500">Segments</span> are the energy that binds the large environments together, allowing you to manage features (or begin to evacuate your hidden base...) for large groups of users with just the wave of your of your hand.
          </p>
             <p className="text-xl text-aws">   
             Return to the Feature Flags menu and select the <span className="text-blue-500">apiConfig</span> flag. Add a rule to <span className="text-blue-500">Target users who match these rules</span>. Select <span className="text-blue-500">Users is in Segment</span>, add the <span className="text-blue-500">Dark Side</span> segment to the rule. Set the value to serve as <span className="text-blue-500">true</span>, Enable targeting, and save your changes. 
          </p>
          
        </div>
      ) : (
        <div />
      )}

    {userLogin && uiEnable && showCards && darkMode == "text-white" && apiConfig && apiLocation == "tatooine" && !toggle ? (
        <div>
          <h1 className="text-aws text-3xl">
            Grown in power, you have but Release features, you must.
          </h1>
          <p className="text-xl text-white">
              The <span className="text-blue-500">Segment</span> we activated has granted us deeper sight into our galactic base operations. With the bad guys hot on our heels it's time to make the jump to our hidden base. We can see our current base on Tatooine is active, and an escape path to the unknown reaches of the galaxy. 
             </p>
             <p className="text-xl text-aws">   
             Return to the Feature Flags menu and select the <span className="text-blue-500">apiLocation</span> flag. Add a rule to <span className="text-blue-500">Target users who match these rules</span>. Select <span className="text-blue-500">Users is in Segment</span> once again, add the <span className="text-blue-500">Dark Side</span> segment to this rule as well. Select our new base <span className="text-blue-500">Coruscant</span> Enable targeting, and save your changes. 
          </p>
          <p className="text-white text-xl">
          Enabling this rule for our <span className="text-blue-500">Dark Side</span> segment allows us to move in the shadows - only launching our new base for users who are one with the Dark Launch. Other Rebels, Imperials, and Bounty hunters will receive our old configuration. This is a key way that LaunchDarkly enables migrations between environments and clouds (or bases). 
          </p>
          <p className="text-xl text-aws text-2xl">   
             With our Dark Launchers safe on Coruscant, our journey to the <span className="text-red-800">dark side</span> has been completed. Return to LaunchDarkly and enable the <span className="text-blue-500">toggle</span> flag for your final instructions.
             </p>
        </div>
      ) : (
        <div />
      )}

      {toggle ? (
        <div>
          <h1 className="text-aws text-3xl">
            You are one with the <span className="text-red-800">Dark Launch</span>. Your training is now complete.
          </h1>
          <p className="text-xl text-white">
             We hope you enjoyed this lightspeed version of exploring LaunchDarkly! Our droids are standing by to help you on the next steps of your journey with LaunchDarkly, or if you like, we offer at 14-Day trial! 
             </p>
             <p className="text-xl text-aws">   
             We hope you enjoy reInvent! Thank you for stopping by!  
          </p>
          <p className="text-white text-xl">
          -- Toggle, off
          </p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
