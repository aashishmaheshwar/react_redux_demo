import React, { Component } from "react";

class ParentMasterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: this.props.choice // recieve value from parent
    };
  }
  render() {
    if (this.state.choice) {
      return <MyChild1 />;
    }
    return <MyChild2 />;
  }
}

class MyChild1 extends Component {
  render() {
    return <div>I am Child 1</div>;
  }
}

class MyChild2 extends Component {
  render() {
    return <div>I am Child 2</div>;
  }
}

export default ParentMasterComponent;
