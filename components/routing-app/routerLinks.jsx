import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomeComponent from "./homeComponent.jsx";
import AboutComponent from "./aboutComponent.jsx";
import ContactComponent from "./contactComponent.jsx";

class RouterLinkComponent extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route exact path="/contact" component={ContactComponent} />
      </Switch>
    );
  }
}

export default RouterLinkComponent;
