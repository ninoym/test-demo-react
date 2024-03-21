import React from "react";

class AddUserInFor extends React.Component {
  state = {
    name: "",
    address: " ",
    age: "",
  };

  handleOnChangeNameInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAgeInput = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.handleAddNewUser({
      // truyen` func tu` cha xuong con
      id: Math.floor(Math.random() * 100 + 1) + " - random",
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I am {this.state.age} years old.
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>your Name : </label>
          <input
            placeholder="Enter your name"
            type="text"
            onChange={(event) => this.handleOnChangeNameInput(event)}
          />
          <br />
          <label>your Age : </label>
          <input
            placeholder="Enter your age"
            type="number"
            value={this.state.age}
            onChange={(event) => this.handleOnChangeAgeInput(event)}
          />
          <br />
          <button> Submit </button>
        </form>
      </div>
    );
  }
}

export default AddUserInFor;
