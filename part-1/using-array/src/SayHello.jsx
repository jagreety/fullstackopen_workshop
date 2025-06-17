let SayHello = ({ person }) => {
  // return React.createElement("h1", { id: "myID" }, `Hello ${props.firstName}`);

  // const getFullName = () => {
  //   return `${person.firstName} ${person.lastName}`;
  // };

  const getFullName = () => `${person.firstName} ${person.lastName}`;

  return (
    <h1 id="myID">
      Hello {person.firstName} {person.lastName} {person.id}
    </h1>
  );
};

export default SayHello;
