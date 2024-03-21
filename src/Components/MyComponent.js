import React from "react";
import UserInFor from "./Userinfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  render() {
    const myAge = 50;
    const myInfor = [" dm ", " nguvl ", " occho "];
    return (
      <div>
        <UserInFor />
        <br></br>
        <DisplayInfor
          name="Nino"
          age={myAge}
          city="Los Angeles"
          myInfor={myInfor}
        />
        <hr />
        <DisplayInfor name="Messi" age="30" city=" Miami" />
      </div>
    );
  }
}

export default MyComponent;
