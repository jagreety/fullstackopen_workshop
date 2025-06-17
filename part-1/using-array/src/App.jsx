import SayHello from "./SayHello";

let App = () => {
  let peopleArray = [
    { firstName: "Jagriti", lastName: "Jha", id: 201 },
    { firstName: "Smriti", lastName: "Jha", id: 301 },
    { firstName: "Aakriti", lastName: "Jha", id: 401 },
  ];

  return peopleArray
    .filter((person) => person.id > 250)
    .map((value) => <SayHello person={value} key={value.id} />);
};

export default App;
