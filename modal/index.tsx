import React from "react";
import ReactDOM from "react-dom";

const Portal: React.FunctionComponent = ({ children }) => {
  if (process.browser) {
    return ReactDOM.createPortal(children, document.getElementById(
      "modal"
    ) as HTMLElement);
  }
  return null;
};

export default Portal;
