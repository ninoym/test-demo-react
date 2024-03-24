import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";

const DisplayInfor = (props) => {
  const { listusers } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  useEffect(() => {
    if (listusers.length === 0) {
      alert("oi mat riu`");
    }
    console.log(">call me neweffect");
  }, [listusers]);
  console.log(">call me render");
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
