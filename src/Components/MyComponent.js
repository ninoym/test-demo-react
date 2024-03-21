import React from "react";
import UserInFor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listusers: [
      { id: 1, name: "Nino", age: 19 },
      { id: 2, name: "Suu", age: 20 },
      { id: 3, name: "Thao", age: 23 },
    ],
  };

  render() {
    // DRY: Don't repeat yourself
    return (
      <div>
        <UserInFor />
        <br></br>
        <DisplayInfor listusers={this.state.listusers} />
      </div>
    );
  }
}

export default MyComponent;
