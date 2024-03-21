import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(this.props); // truyen` thuoc tinh tu cha xuong con
    // destructering : lay ra cac phan tu cua this.props
    const { name, age, myInfor } = this.props;
    return (
      <>
        <div> My name's is {name} </div>
        <div> My age's is {age}</div>
        <div> My infor {myInfor}</div>
      </>
    );
  }
}
export default DisplayInfor;
