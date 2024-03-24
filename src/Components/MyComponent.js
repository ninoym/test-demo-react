import React, { useState } from "react";
import AddUserInFor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";

//   handleAddNewUser = (userobj) => {
//     console.log("check data>>>", userobj);
//     this.setState({
//       // dung` de update state

//       listusers: [userobj, ...this.state.listusers], // add data to array
//     });
//   };

//   handleDeleteUser = (userId) => {
//     // let listUsersClone = [...this.state.listusers];
//     let listUsersClone = this.state.listusers;
//     listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listusers: listUsersClone,
//     });
//   };

//   render() {
//     // DRY: Don't repeat yourself
//     return (
//       <div>
//         <AddUserInFor handleAddNewUser={this.handleAddNewUser} />
//         <br></br>
//         <DisplayInfor
//           listusers={this.state.listusers}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </div>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listusers, setListUsers] = useState([
    { id: 1, name: "Nino", age: "16" },
    { id: 2, name: "Suu", age: "20" },
    { id: 3, name: "Thao", age: "53" },
  ]);

  const handleAddNewUser = (userobj) => {
    setListUsers([userobj, ...listusers]);
  };

  const handleDeleteUser = (userId) => {
    // let listUsersClone = [...this.state.listusers];
    let listUsersClone = listusers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(listUsersClone);
  };

  // DRY: Don't repeat yourself
  return (
    <div>
      <AddUserInFor handleAddNewUser={handleAddNewUser} />
      <br></br>
      <DisplayInfor listusers={listusers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};
export default MyComponent;
