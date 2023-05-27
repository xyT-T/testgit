import React, { Component } from "react";
import "./mainPage.css";

class MainPage extends Component {
  state = {};
  render() {
    return (
      <div class="main">
        <div class="top">
          <h1>FoodBuddy</h1>
          <p class="toolbar">Home</p>
          <p class="toolbar">About</p>
          <p class="toolbar">My Session</p>
          <p class="toolbar">Profile</p>
        </div>
        <body>
          <p class="post">No available session yet</p>
        </body>
      </div>
    );
  }
}

export default MainPage;
