import React from "react";

class UserInFor extends React.Component {
  state = {
    name: "Anh Dung Tran",
    address: " Hoi Dan IT",
    age: 26,
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
    alert("oke la");
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
            value={this.state.name}
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

export default UserInFor;
