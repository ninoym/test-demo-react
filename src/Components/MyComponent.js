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
  // JSX: coding html inside  javascript
  render() {
    return (
      <div>
        Hello World!
        {Math.random() * 1000}
      </div>
    );
  }
}

export default MyComponent;
