import React, { Component } from "react";
import "./Registration.css";

class Registration extends Component {
  render() {
    return (
      <div>
        <body>
          <div className="box">
            <h1>Registration Form</h1>
            <p>Please fill out this form with the required information</p>
            <form method="post" action="http://localhost:3001/register">
              <fieldset>
                <label htmlFor="first-name">
                  Enter Your First Name:{" "}
                  <input
                    id="first-name"
                    name="firstname"
                    type="text"
                    required
                  />
                </label>
                <label htmlFor="last-name">
                  Enter Your Last Name:{" "}
                  <input id="last-name" name="lastname" type="text" required />
                </label>
                <label htmlFor="email">
                  Enter Your NUS Email:{" "}
                  <input id="email" name="email" type="email" required />
                </label>
                <label htmlFor="new-password">
                  Create a New Password:{" "}
                  <input
                    id="new-password"
                    name="password"
                    type="password"
                    pattern="[a-z0-5]{8,}"
                    required
                  />
                </label>
                <p className="question"> Are you a NUS staff or student?</p>
                <label htmlFor="student">
                  <input
                    id="Student"
                    type="radio"
                    name="Identity"
                    className="inline"
                  />
                  NUS Student
                </label>
                <label htmlFor="staff">
                  <input
                    id="staff"
                    type="radio"
                    name="identity"
                    className="inline"
                  />
                  NUS Staff
                </label>
                <label htmlFor="terms-and-conditions">
                  <input
                    id="terms-and-conditions"
                    type="checkbox"
                    required
                    name="terms-and-conditions"
                    className="inline"
                  />
                  I accept the terms and conditions
                </label>
              </fieldset>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </body>
      </div>
    );
  }
}

export default Registration;
