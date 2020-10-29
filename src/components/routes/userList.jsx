import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddUser from "../users/addUser";
import EditUser from "../users/editUser";
import ViewUser from "../users/viewUser";
import UserBody from "./userBody";
import UserHead from "./userHead";
const User = () => {
  const [userList, setUserList] = useState([]),
    [name, setName] = useState(""),
    [age, setAge] = useState("");

  const onSubmit = () => setUserList([...userList, { name, age }]);

  return (
    <Router>
      <div className="container">
        <div className="py-4">
          <Link className="btn btn-primary" to="/usersadd">
            Add User
          </Link>
          <Switch>
            <Route exact path="/usersadd">
              <AddUser
                name={name}
                age={age}
                onNameChange={setName}
                onAgeChange={setAge}
                onSubmit={onSubmit}
              />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/userslist">
              <h1>Users List</h1>
              <table class="table border shadow">
                <UserHead />
                <UserBody userList={userList} setUserList={setUserList} />
              </table>
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/viewUser">
              <ViewUser userList={userList} setUserList={setUserList} />
            </Route>
          </Switch>

          <Switch>
            <Route exact path="/editUser">
              <EditUser userList={userList} setUserList={setUserList} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default User;
