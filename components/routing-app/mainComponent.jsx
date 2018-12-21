import React, { Component } from "react";
import RouterLinkComponent from "./routerLinks.jsx";
import LinkComponent from "./headerLinks.jsx";

class MainComponent extends Component {
  render() {
    return (
      <div className="container">
        <LinkComponent />
        <RouterLinkComponent />
      </div>
    );
  }
}

export default MainComponent;
