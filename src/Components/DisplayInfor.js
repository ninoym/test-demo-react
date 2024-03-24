// import React, { useState } from "react";
// import "./DisplayInfor.scss";
// import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//   render() {
//     // truyen` thuoc tinh tu cha xuong con
//     // destructering : lay ra cac phan tu cua this.props
//     const { listusers } = this.props;
//     console.log(listusers);
//     // cau dieu kien giup code ngan di
//     return (
//       <>
//         {true && (
//           <div className="display-infor-container">
//             {/* <img src={logo} /> */}
//             {listusers.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>Name: {user.name}</div>
//                   <div>Age: {user.age} </div>
//                   <hr />
//                   <button onClick={() => this.props.handleDeleteUser(user.id)}>
//                     Delete
//                   </button>
//                 </div>
//               );

//               //convert string to number use ' + '
//             })}
//           </div>
//         )}
//       </>
//     );
//   }
// }

import React, { useState } from "react";
import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
  const { listusers } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  return (
    <>
      <div className="display-infor-container">
        <div>
          <span onClick={() => handShowHideListUser()}>
            {isShowHideListUser ? "Hide list users" : "Show list users"}
          </span>
        </div>

        {isShowHideListUser && (
          <>
            {listusers.map((user) => (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>Name: {user.name}</div>
                <div>Age: {user.age} </div>
                <hr />
                <button onClick={() => props.handleDeleteUser(user.id)}>
                  Delete
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default DisplayInfor;
