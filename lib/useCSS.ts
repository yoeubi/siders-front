import { useEffect } from "react";

export const useBodyHidden = () => {
  return useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });
};
