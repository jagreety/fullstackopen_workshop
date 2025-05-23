let SayHello = (props) => {
  return React.createElement("h1", { id: "myID" }, `Hello ${props.firstName}`);
};
let App = () => {
  return React.createElement(
    "div",
    {},

    [
      React.createElement(
        "div",
        {},
        React.createElement(SayHello, { firstName: "Jagriti" }),
        React.createElement(
          "div",
          {},
          React.createElement(SayHello, { firstName: "Smriti" })
        ),
        React.createElement(
          "div",
          {},
          React.createElement(SayHello, { firstName: "Aakriti" })
        )
      ),
    ]
  );
};
let container = document.getElementById("root");
let root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
