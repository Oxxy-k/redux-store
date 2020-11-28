import React from "react";

import "./error-indicator.css";
import icon from "./error-indicator.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" className="error-man" />
      <span className="boom">Sorry!</span>
      <span>something is wrong</span>
    </div>
  );
};

export default ErrorIndicator;
