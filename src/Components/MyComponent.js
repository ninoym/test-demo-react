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

  handleClick(event) {
    console.log(" random ", Math.floor(Math.random() * 100 + 1));
    //merge state =>> react class
    this.setState({
      name: "RonaldO",
      age: Math.floor(Math.random() * 100 + 1),
    });

    // this.setState({
    //   age: Math.floor(Math.random() * 100 + 1),
    // });
  }

  handleOnMoverOver(event) {
    // console.log(event);
  }
  // JSX: coding html inside  javascript
  render() {
    return (
      <div>
        My name is {this.state.name} and I am {this.state.age} years old.
        <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          {" "}
          Click me{" "}
        </button>
      </div>
    );
  }
}

export default MyComponent;
