import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const AddUser = ({ name, age, onNameChange, onAgeChange, onSubmit }) => {
  return (
    <div className="container">
      <div className="py-4">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              required
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="text"
              required
              className="form-control form-control-lg"
              placeholder="Enter Your Age"
              name="age"
              value={age}
              onChange={(e) => onAgeChange(e.target.value)}
            />
          </div>
          <Link to="/userslist">
            <button className="btn btn-primary btn-block" onClick={onSubmit}>
              Add User
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
};

export default AddUser;
