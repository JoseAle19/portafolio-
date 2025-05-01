import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const usePageView = () => {
  const location = useLocation();
// console.log('jose')
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag('config', 'G-VNDTPWNRQC', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};
