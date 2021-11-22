import React, { useState, useEffect } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";

export default function Nav(props) {
  const { showCards, uiEnable, userLogin, darkMode, apiConfig, toggle, apiLocation } = useFlags();
  return (
    <div>
      {userLogin && !uiEnable && !showCards && darkMode == "text-black" && !apiConfig ? (
        <div className="text-xl">
          <h1 className="text-ldhl">You sense the presence of a Dark Launch</h1>
          <p className="text-ldgraytext text-xl">
            Great shooting, kid! You just launched your first feature! Enabling
            the <span className="text-ldhl font-bold">Login Box</span> flag
            released the new code into your application faster than your
            favorite smugglers can escape an Empire patrol.
          </p>
          <p className="text-xl text-ldgraytext">
            Return to LaunchDarkly and select the
            <span className="text-ldhl font-bold"> Expanded UI</span> flag. Add
            your first name to the "Target Individual Users" section in
            lowercase.
          </p>
          <p className="text-ldgraytext text-xl">
          <span className="text-ldhl font-bold">Targeting rules</span> allow us to apply feature releases and configurations to specific users
            or larger groups and <span className="text-ldhl font-bold">segments</span>. This allows us to release and
            rollback features at any scale. In this example we're targeting a single member of our Rebel Alliance. 
          </p>

          <p className="text-xl text-ldgraytext">
            Once your task is complete, return here and enter your username and click the submit
            button.
          </p>
        </div>
      ) : (
        <div />
      )}

      {uiEnable && userLogin && !showCards && darkMode === "text-black" && !apiConfig ? (
        <div>
          <h1 className="text-ldyellow text-3xl">
            An Elegant Tool for a More Civilized Age
          </h1>
          <p className="text-white text-xl">
            When we submitted our username in the previous screen, the
            LaunchDarkly client embedded in our application created a user object in LaunchDarkly. The platform evaluated this user against the targeting rule we created, and rendered our results from the application code. 
          </p>
          <p className="text-white text-xl">
            Navigate back into LaunchDarkly and select the{" "}
            <span className="text-ldhl font-bold">Card View</span> flag. Once again, add your user target to this flag and enable targeting. Save your changes, and return to this screen where things will look a bit different... 
          </p>
        </div>
      ) : (
        <div />
      )}

      {userLogin && uiEnable && showCards && darkMode == "text-black" && !apiConfig ? (
        <div>
          <h1 className="text-ldyellow text-3xl">
            I sense a disturbance in the Feature.
          </h1>
          <p className="text-xl text-white">
            The flag we enabled rendered new objects on our screen, but they are too dark to read. We can abort our run and disable the flag immediately (removing the code from production) or use LaunchDarkly to push a new feature to correct this problem. We're going for it. Never tell me the odds. 
          </p>
          <p className="text-ldyellow text-xl">
            Return to LaunchDarkly and inspect the{" "}
            <span className="text-ldhl font-bold">White Text</span> flag. This
            flag is a <span className="text-ldhl font-bold">string</span> flag meaning it can deliver text, instead of simply a boolean (true/false). We're using this flag to push a new color configuration to replace the dark text on the screen. 
          </p>
          <p className="text-ldyellow text-xl">
          Set S-Foils in lock position and enable (don't forget to save!) that feature!
          </p>
        </div>
      ) : (
        <div />
      )}
      {userLogin && uiEnable && showCards && darkMode == "text-white" && !apiConfig && apiLocation == "tatooine" && !toggle ? (
        <div>
          <h1 className="text-ldyellow text-3xl">
            The <span className="text-ldred">Dark Side</span> is strong with
            you.
          </h1>
          <p className="text-xl text-white"> With the flick of your wrist, you were able to remove a problem feature from production faster than an energy sword cutting through a bulkhead. The Dark Side flows through you.</p>

          <p className="text-xl text-white">
            When you've got an Empire or a Rebellion on your heels - getting an evacuation coordinated requires orchstrating at scale. 
            </p>
            <p className="text-xl text-white">
            Return to LaunchDarkly and select <span className="text-ldhl">segments</span> from the left navigation bar. Select the <span className="text-ldhl">Dark Side</span> segment and add your user to the included users list.
             </p>
             <p className="text-xl text-white">   
             Return to the Feature Flags menu and select the <span className="text-ldhl">Base Visibility</span> flag. Add a rule to <span className="text-ldhl">Target users who match these rules</span>. Select <span className="text-ldhl">Users is in Segment</span>, and add the <span className="text-ldhl">Dark Side</span> segment to the rule. Set the value to serve as <span className="text-ldhl">true</span>, enable targeting, and save your configuration. 
          </p>
          
        </div>
      ) : (
        <div />
      )}

    {userLogin && uiEnable && showCards && darkMode == "text-white" && apiConfig && apiLocation == "tatooine" && !toggle ? (
        <div>
          <h1 className="text-ldyellow text-3xl">
            Grown in power, you have. Release more features, you must.
          </h1>
          <p className="text-xl text-white">
              Configuring our rule as a <span className="text-ldhl">Segment</span> allows us to manage our environment at galactic scale. With new powers unlocked, we can see that we have a hidden base that we can escape to. Our current base on Tatooine has been compromise and it's time to jump our Dark Launching into lightspeed and head into the unknown.
             </p>
             <p className="text-xl text-white">   
             Return to the Feature Flags menu and select the <span className="text-ldhl">Base Locations</span> flag. As we did before, add our <span className="text-ldhl">Dark Side</span> segment to the <span className="text-ldhl">Target users who match these rules</span> section. For our target, select our new base <span className="text-ldhl">Coruscant</span>. Enable targeting, and save your changes. 
          </p>
        </div>
      ) : (
        <div />
      )}

{userLogin && uiEnable && showCards && darkMode == "text-white" && apiConfig && apiLocation == "coruscant" && !toggle ? (
        <div>
          <h1 className="text-ldyellow text-3xl">
            You are one with the <span className="text-ldred">Dark Launch</span>.
          </h1>
          <p className="text-white text-xl"> The <span className="text-ldred">Dark Side</span> has given you the ability to hide your configurations from all users except your Dark Side segment. This is the essence of the Dark Launch - releasing features to groups of users, ensuring safety and reliability, gathering data, and controlling the way we release them into production. 
          </p>
          <p className="text-xl text-white text-2xl">   
             With our Dark Launchers safe on Coruscant, our journey to the <span className="text-ldred">Dark Side</span> has been completed. Return to LaunchDarkly and enable the <span className="text-ldhl">Toggle Up!</span> flag for your final instructions.
             </p>
        </div>
      ) : (
        <div />
      )}

      {toggle ? (
        <div>
          <h1 className="text-white text-3xl">
            You are one with the <span className="text-ldred">Dark Launch</span>. Your training is now complete.
          </h1>
          <p className="text-xl text-ldgraytext">
             We hope you enjoyed this lightspeed version of exploring LaunchDarkly! Our droids are standing by to help you on the next steps of your journey with LaunchDarkly, or if you like, we offer at 14-Day trial! 
             </p>
             <p className="text-xl text-ldhl">   
             We hope you enjoy reInvent! Thank you for stopping by!  
          </p>
          <p className="text-ldgraytext text-xl">
          -- Toggle, off
          </p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
