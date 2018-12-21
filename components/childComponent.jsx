import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    // called once. so, not here. then where?
    let val = "Hello";
    if (this.props.Message === "Upper") {
      val = val.toUpperCase();
    } else if (this.props.Message === "Lower") {
      val = val.toLowerCase();
    }
    this.state = {
      val
    };
    this.changeCase = this.changeCase.bind(this);
  }

  changeCase() {
    let val = this.state.val;
    if (this.props.Message === "Upper") {
      val = val.toUpperCase();
    } else if (this.props.Message === "Lower") {
      val = val.toLowerCase();
    }
    this.setState({ val });
  }

  render() {
    // this.changeCase();
    return (
      <div>
        <h2>{this.state.val}</h2>
        Message: {this.props.Message}
      </div>
    );
  }
}

export default ChildComponent;
