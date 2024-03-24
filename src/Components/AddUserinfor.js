import React, { useState } from "react";

const AddUserInFor = (props) => {
  const [name, setName] = useState("");
  const [address, setAdress] = useState("Hanoi");
  const [age, setAge] = useState("");

  const handleOnChangeNameInput = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAgeInput = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    props.handleAddNewUser({
      // truyen` func tu` cha xuong con
      id: Math.floor(Math.random() * 100 + 1) + " - random",
      name: setName,
      age: setAge,
    });
  };

  return (
    <div>
      My name is {name} and I am {age} years old.
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>your Name : </label>
        <input
          placeholder="Enter your name"
          type="text"
          onChange={(event) => handleOnChangeNameInput(event)}
        />
        <br />
        <label>your Age : </label>
        <input
          placeholder="Enter your age"
          type="number"
          value={age}
          onChange={(event) => handleOnChangeAgeInput(event)}
        />
        <br />
        <button> Submit </button>
      </form>
    </div>
  );
};

export default AddUserInFor;
