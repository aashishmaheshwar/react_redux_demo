import React, { Component } from "react";
import ChildComponent from "./childComponent.jsx";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCase: ""
    };

    this.handleUpperCase = this.handleUpperCase.bind(this);
    this.handleLowerCase = this.handleLowerCase.bind(this);
  }

  handleUpperCase() {
    this.setState({ selectedCase: "Upper" });
  }

  handleLowerCase() {
    this.setState({ selectedCase: "Lower" });
  }

  render() {
    return (
      <div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Upper"
              checked={this.state.selectedCase === "Upper"}
              onChange={this.handleUpperCase}
            />
            Upper
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Lower"
              checked={this.state.selectedCase === "Lower"}
              onChange={this.handleLowerCase}
            />
            Lower
          </label>
        </div>
        <ChildComponent Message={this.state.selectedCase} />
      </div>
    );
  }
}

export default ParentComponent;
