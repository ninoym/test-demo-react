import React from "react";
import "./DisplayInfor.scss";
// import logo from "./../logo.svg";

class DisplayInfor extends React.Component {
  constructor(props) {
    console.log(">>>call coonstructer:1");
    super(props);
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log(">>call me component did mount ");
    setTimeout(() => {
      document.title = "Suuu";
    }, 3000);
  }

  componentDidUpdate(PrevProps, prevState, snapshot) {
    console.log(">>call me component did update", this.props, PrevProps);
    if (this.props.listusers !== PrevProps.listusers) {
      if (this.props.listusers.length === 5) {
        alert("vai loz");
      }
    }
  }

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser, //toggle
    });
  };
  // template + logic js
  render() {
    console.log(">>call me render 3");
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
            {/* <img src={logo} /> */}
            {listusers.map((user, index) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>Name: {user.name}</div>
                  <div>Age: {user.age} </div>
                  <hr />
                  <button onClick={() => this.props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
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
