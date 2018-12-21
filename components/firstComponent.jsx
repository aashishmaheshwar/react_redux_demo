import React, { Component } from "react";
import ChildComponent from "./childComponent.jsx";

class FirstComponent extends Component {
  render() {
    return (
      <div>
        <h2>The First React.js Component!!!</h2>
        <br />
        <MessageComponent />
        <br />
        <ChildComponent />
      </div>
    );
  }
}

class MessageComponent extends Component {
  render() {
    return (
      <div>
        <h3>The Message Component</h3>
      </div>
    );
  }
}

// for other modules to import it
export default FirstComponent;
