import React from "react";
import ProfileDetails from "./ProfileDetails";
import { useOverlay } from "../../OverlayContext";

const Overlay = () => {
  const overlays = useOverlay();

  const getOverlay = {
    profileDetails: <ProfileDetails />,
  };

  return <>{getOverlay[overlays.overlay.name]}</>;
};

export default Overlay;
