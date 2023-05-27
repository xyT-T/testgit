import React, { Component } from "react";
import "./logIn.css";

class LogIn extends Component {
  render() {
    return (
      <div className="cover">
        <main>
          <h1>Your better dining experience starts here!</h1>
          <div className="box">
            <h2>Login</h2>
            <input type="text" placeholder="username" required />
            <p></p>
            <input type="text" placeholder="passwoard" required />
            <p></p>
            <button class="button-39" role="button" type="submit">
              {" "}
              submit
            </button>
            <p className="prompt">
              Do not have an account yet? Register with us now!
            </p>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default LogIn;
