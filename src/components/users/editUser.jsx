import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditUser = ({ userList, setUserList }) => {
  const [id1, setId] = useState(localStorage.getItem("index"));
  const [name1, setName] = useState(""),
    [age1, setAge] = useState("");
  return (
    <div className="container">
      <div className="py-4">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit Details</h2>
          <div className="form-group">
            <label>ID</label>
            <input
              type="text"
              className="form-control form-control-lg"
              //placeholder="Enter Your Name"
              name="id"
              value={id1}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name1}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Age"
              name="age"
              value={age1}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <Link to="/userslist">
            <button
              className="btn btn-success btn-block"
              onClick={() => {
                localStorage.setItem("name1", name1);
                localStorage.setItem("age1", age1);
                change();
              }}
            >
              Edit User
            </button>
          </Link>
          <br />
          <Link to="/userslist">
            <button className="btn btn-primary btn-block">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
  function change() {
    const name1 = localStorage.getItem("name1");
    const age1 = localStorage.getItem("age1");

    console.log(
      userList.filter((e, i) => {
        if (i + 1 == id1) {
          e.name = name1;
          e.age = age1;
        }
      })
    );
  }
};

export default EditUser;
