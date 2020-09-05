import React from "react";
import { useSelector } from "react-redux";

import "./SideBar.css";
import { userListSelector } from "./user.reducer";

function SideBar() {
  const userList = useSelector(userListSelector);

  return (
    <aside className="side-bar">
      {userList.map((user) => (
        <p key={user.id} className="text-user">
          {user.name}
        </p>
      ))}
    </aside>
  );
}

export default SideBar;
