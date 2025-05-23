let SayHello = (props) => {
  // return React.createElement("h1", { id: "myID" }, `Hello ${props.firstName}`);
  return <h1 id="myID"> Hello {props.firstName}</h1>;
};

export default SayHello;
