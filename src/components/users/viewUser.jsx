import React from "react";

import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

const ViewUser = () => {
  return (
    <div className="container">
      <div className="py-4">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">User Details</h2>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{localStorage.getItem("index")}</th>
                <td>{localStorage.getItem("name")}</td>
                <td>{localStorage.getItem("age")}</td>
              </tr>
            </tbody>
          </table>
          <Link to="/userslist">
            <button className="btn btn-primary btn-block">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
