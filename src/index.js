import React from "react";
import ReactDOM from "react-dom";
import Spinner from "./components/spinner";
import ErrorIndicator from "./components/error-indicator";

const App = () => {
  return (
    <div>
      <Spinner />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
