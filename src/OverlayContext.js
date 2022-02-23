import React, { useState, createContext, useContext, useEffect } from "react";

const OverlayContext = createContext();

const OverlayProvider = (props) => {
  const [overlay, setOverlay] = useState({
    show: false,
    name: null,
  });

  const updateOverlay = (data) =>
    setOverlay((previousState) => ({
      ...previousState,
      ...data,
    }));

  const showOverlay = (name) => updateOverlay({ name: name, show: true });

  const hideOverlay = () => updateOverlay({ show: false });

  const OverlayContextValue = {
    overlay,
    showOverlay,
    hideOverlay,
  };

  return <OverlayContext.Provider value={OverlayContextValue} {...props} />;
};

const useOverlay = () => useContext(OverlayContext);

export { OverlayProvider, useOverlay };
