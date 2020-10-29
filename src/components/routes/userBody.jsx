import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const UserBody = ({ userList, setUserList }) => {
  return (
    <tbody>
      {userList.map((user, index) => (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>
            <Link
              to="/viewUser"
              class="btn btn-outline-primary mr-2"
              onClick={() => {
                localStorage.setItem("index", index + 1);
                localStorage.setItem("name", user.name);
                localStorage.setItem("age", user.age);
              }}
            >
              View
            </Link>
            <Link
              to="/editUser"
              class="btn btn-outline-success mr-2"
              onClick={() => {
                localStorage.setItem("index", index + 1);
                localStorage.setItem("name", user.name);
                localStorage.setItem("age", user.age);
              }}
            >
              Edit
            </Link>
            <button
              class="btn btn-outline-danger"
              value={user}
              onClick={() => Delete(user)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );

  function Delete(val) {
    let status = window.confirm("Are you sure you want to delete this user ?");
    if (status) {
      let filterValue = userList.filter((e) => !(val === e));
      setUserList(filterValue);
    }
    return <div>{console.log("Deleted")}</div>;
  }
};

export default UserBody;
