import React from "react";
import AddUserInFor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listusers: [
      { id: 1, name: "Nino", age: "16" },
      { id: 2, name: "Suu", age: "20" },
      { id: 3, name: "Thao", age: "53" },
    ],
  };

  handleAddNewUser = (userobj) => {
    console.log("check data>>>", userobj);
    this.setState({
      // dung` de update state

      listusers: [userobj, ...this.state.listusers], // add data to array
    });
  };

  handleDeleteUser = (userId) => {
    // let listUsersClone = [...this.state.listusers];
    let listUsersClone = this.state.listusers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    this.setState({
      listusers: listUsersClone,
    });
  };

  render() {
    // DRY: Don't repeat yourself
    return (
      <div>
        <AddUserInFor handleAddNewUser={this.handleAddNewUser} />
        <br></br>
        <DisplayInfor
          listusers={this.state.listusers}
          handleDeleteUser={this.handleDeleteUser}
        />
      </div>
    );
  }
}

export default MyComponent;
