import { useState, useEffect, useRef } from "react";
import type { TScreenSize } from "~/types/types";
import { EScreenSize, DEBOUNCE_DELAY } from "~/settings/constants";

const useScreenSize = (
  thresholds: { mobile: number; tablet: number },
  debounceDelay: number = DEBOUNCE_DELAY
) => {
  const [screenSize, setScreenSize] = useState<TScreenSize>(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < thresholds.mobile) return EScreenSize.mobile;
      if (window.innerWidth < thresholds.tablet) return EScreenSize.tablet;
      return EScreenSize.desktop;
    }
    return EScreenSize.desktop;
  });

  const previousScreenSize = useRef<TScreenSize>(screenSize);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let debounceTimer: ReturnType<typeof setTimeout>;

      const handleResize = () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          let newScreenSize: TScreenSize = EScreenSize.desktop;
          if (window.innerWidth < thresholds.mobile) {
            newScreenSize = EScreenSize.mobile;
          } else if (window.innerWidth < thresholds.tablet) {
            newScreenSize = EScreenSize.tablet;
          }

          if (newScreenSize !== previousScreenSize.current) {
            setScreenSize(newScreenSize);
            previousScreenSize.current = newScreenSize;
          }
        }, debounceDelay);
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
        clearTimeout(debounceTimer);
      };
    }
  }, [thresholds, debounceDelay]);

  return screenSize;
};

export default useScreenSize;
