import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinkComponent extends Component {
  render() {
    return (
      <div>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <td>
                <Link to="/">Home</Link>
              </td>
              <td>
                <Link to="/about">About</Link>
              </td>
              <td>
                <Link to="/contact">Contact</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LinkComponent;
