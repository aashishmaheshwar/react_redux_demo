import React, { Component } from "react";

class DemoUncontrolledComponent extends Component {
  handleSubmit(e) {
    if (
      this.UserName.value === "Aashish" &&
      this.Password.value === "Aashish"
    ) {
      alert("Login successful");
    } else {
      alert("Login failed");
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form name="frm" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="UserName">User Name</label>
            <input
              type="text"
              ref={UserName => (this.UserName = UserName)}
              name="UserName"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              ref={Password => (this.Password = Password)}
              name="Password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-success" />
          </div>
        </form>
      </div>
    );
  }
}

export default DemoUncontrolledComponent;
