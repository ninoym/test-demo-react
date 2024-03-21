import React from "react";

class DisplayInfor extends React.Component {
  render() {
    // truyen` thuoc tinh tu cha xuong con
    // destructering : lay ra cac phan tu cua this.props
    const { listusers } = this.props;

    return (
      <>
        <div>
          {listusers.map((user, index) => {
            return (
              <div key={user.id}>
                <div>Name: {user.name}</div>
                <div>Age: {user.age} </div>
                <hr />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default DisplayInfor;
