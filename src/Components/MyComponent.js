// class component
// import React, { Component } from 'react';

// function component DidMount() {
//   console.log('Component did mount!');
// }

// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World!</h1>
//         <button onClick={componentDidMount}>Click me</button>
//       </div>
//     );
//   }
// }
import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Anh Dung Tran",
    address: " Hoi Dan IT",
    age: 26,
  };

  // handleClick(event) {
  //   console.log(" random ", Math.floor(Math.random() * 100 + 1));
  //   //merge state =>> react class
  //   this.setState({
  //     name: "Anh Dung Tran",
  //     age: Math.floor(Math.random() * 100 + 1),
  //   });

  // }

  // handleOnMoverOver(event) {
  //   // console.log(event);
  // }
  // JSX: coding html inside  javascript

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
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
          <input
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <button> Submit </button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
