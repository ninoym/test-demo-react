import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser, //toggle
    });
  };

  render() {
    // truyen` thuoc tinh tu cha xuong con
    // destructering : lay ra cac phan tu cua this.props
    const { listusers } = this.props;
    console.log(listusers);
    // cau dieu kien giup code ngan di
    return (
      <>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true ? "Hide" : "Show me"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div className="display-infor-container">
            <img src={logo} />
            {listusers.map((user, index) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>Name: {user.name}</div>
                  <div>Age: {user.age} </div>
                  <hr />
                </div>
              );

              //convert string to number use ' + '
            })}
          </div>
        )}
      </>
    );
  }
}
export default DisplayInfor;
