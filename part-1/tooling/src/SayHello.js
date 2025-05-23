import React from "react";

let SayHello = (props) => {
  return React.createElement("h1", { id: "myID" }, `Hello ${props.firstName}`);
};

export default SayHello;
