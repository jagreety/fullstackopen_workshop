import React from "react";
import SayHello from "./SayHello";

let App = () => {
  return React.createElement("div", {}, [
    React.createElement(SayHello, { firstName: "Jagriti" }),
    React.createElement(SayHello, { firstName: "Smriti" }),
    React.createElement(SayHello, { firstName: "Aakriti" }),
  ]);
};

export { App };
