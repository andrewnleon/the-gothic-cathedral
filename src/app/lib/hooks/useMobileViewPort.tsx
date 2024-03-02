import { useState, useEffect } from "react";

export default function useMobileViewport() {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      // Detect if the device is a mobile device based on the user agent
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
      // Check if the viewport is in landscape orientation
      const isLandscapeOrientation = window.innerWidth > window.innerHeight;
      // Update state if both conditions are true
      setIsLandscape(isMobileDevice && isLandscapeOrientation);
    };

    // Add event listener for changes in orientation or resize
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    // Initial check
    checkOrientation();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return isLandscape;
}
