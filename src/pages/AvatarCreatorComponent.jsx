import { AvatarCreator } from "@readyplayerme/react-avatar-creator";
import React from "react";
const config = {
  clearCache: true,
  bodyType: "fullbody",
  quickStart: false,
  language: "en",
};

const style = { width: "100%", height: "100vh", border: "none" };

export default function AvatarCreatorComponent() {
  const handleOnAvatarExported = (event) => {
    console.log(`Avatar URL is: ${event.data.url}`);
  };

  return (
    <>
      <AvatarCreator
        subdomain="https://test-app-dwcquj.readyplayer.me?frameApi"
        config={config}
        style={style}
        onAvatarExported={handleOnAvatarExported}
      />
    </>
  );
}
