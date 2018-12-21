import React, { Component } from "react";

class DataComponent extends Component {
  // add a constructor
  // the ctor accepts props as parameter
  constructor(props) {
    super(props);
    // define a state. It is a JSON Object.
    this.state = {
      x: 0,
      y: 0,
      res: 0,
      name: this.props.name
    };

    // binding all methods to component so that they can be bound to events of HTML element
    this.handleXChange = this.handleXChange.bind(this);
    this.handleYChange = this.handleYChange.bind(this);
    this.add = this.add.bind(this);
  }

  // e is the element reference of whose value will be read when an event is raised on the HTML element
  handleXChange(e) {
    this.setState({ x: e.target.value });
  }

  handleYChange(e) {
    this.setState({ y: e.target.value });
  }

  add() {
    let res = +this.state.x + +this.state.y;
    this.setState({ res });
  }

  render() {
    return (
      <div className="container">
        <h2>{this.state.name}</h2>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <td>First Number:</td>
              <td>
                <input
                  type="text"
                  value={this.state.x}
                  className="form-control"
                  onChange={this.handleXChange}
                />
              </td>
            </tr>
            <tr>
              <td>Second Number:</td>
              <td>
                <input
                  type="text"
                  value={this.state.y}
                  className="form-control"
                  onChange={this.handleYChange}
                />
              </td>
            </tr>
            <tr>
              <td>Result:</td>
              <td>
                <input
                  type="text"
                  value={this.state.res}
                  readOnly
                  className="form-control"
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button className="btn btn-success" onClick={this.add}>
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DataComponent;
