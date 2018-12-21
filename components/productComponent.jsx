import React, { Component } from "react";
import ProductService from "./../service/ProductService.js";
import { FormErrors } from "./formErrorConstants.jsx";

class ProductServiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      ProdId: 0,
      ProdName: "fd",
      Price: 0,
      CategoryName: "",
      Manufacturer: "",
      Categories: ["ECT", "ECL", "MEC", "CIV"],
      Manufacturers: ["MS", "LS", "TS"],
      duplicateProdIdError: "",
      formErrors: { ProdId: "", ProdName: "", Price: "" },
      prodIDValid: false,
      prodNameValid: false,
      priceValid: false
    };
    this.serv = new ProductService();
  }

  validateField(fieldName, value) {
    // 1. Local Declaration for Validation State
    // object containing error State for Email and Password
    let fieldValidationErrors = this.state.formErrors;
    // let emailValid = this.state.emailValid; // boolean
    // let passwordValid = this.state.passwordValid; // boolean
    let { prodIDValid, prodNameValid, priceValid } = this.state;

    switch (fieldName) {
      case "ProdId":
        prodIDValid = this.checkValidProdID(value);
        // .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.ProdId = prodIDValid ? "" : " is already present";
        break;
      case "ProdName":
        prodNameValid = value.match(/^[A-Za-z]+$/); // value.length >= 6;
        fieldValidationErrors.ProdName = prodNameValid
          ? ""
          : " is not a pure string";
        break;
      case "Price":
        priceValid = value.match(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/);
        fieldValidationErrors.Price = priceValid
          ? ""
          : " is not a positive number";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        prodIDValid,
        prodNameValid,
        priceValid
      },
      this.validateForm
    );
  }
  // 2. Validate the form so that the submit button will be
  // enabled or disabled
  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  checkValidProdID(value) {
    let temp = this.state.data.slice();

    temp = temp.filter(row => +row.ProdId === +value);
    if (temp.length > 0) {
      return false;
    }
    return true;
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  handleProdIdChange(e) {
    this.handleUserInput(e);
    this.setState({ ProdId: e.target.value });
  }
  handleProdNameChange(e) {
    this.handleUserInput(e);
    this.setState({ ProdName: e.target.value });
  }
  handlePriceChange(e) {
    this.handleUserInput(e);
    this.setState({ Price: e.target.value });
  }
  handleCategoryNameChange(e) {
    this.setState({ CategoryName: e.target.value });
  }
  handleManufacturerChange(e) {
    this.setState({ Manufacturer: e.target.value });
  }

  componentDidMount() {
    this.serv
      .get()
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  save() {
    const { ProdName, Price, CategoryName, Manufacturer } = this.state;
    let prd = {
      ProdId: this.state.ProdId,
      ProdName,
      Price,
      CategoryName,
      Manufacturer
    };
    this.serv
      .post(prd)
      .then(resp => resp.json())
      .then(data => this.serv.get())
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  clear() {
    this.setState({ ProdId: 0 });
    this.setState({ ProdName: "" });
    this.setState({ Price: 0 });
    this.setState({ CategoryName: "" });
    this.setState({ Manufacturer: "" });
  }

  saveRow() {
    // save data in a products array
    // 1. create a new array having same structure of Products array
    let temp = this.state.data.slice();

    temp = temp.filter(row => +row.ProdId === +this.state.ProdId);
    if (temp.length > 0) {
      this.setState({
        duplicateProdIdError: `Please don't enter a row with duplicate ProdId`
      });
    } else {
      this.setState({
        duplicateProdIdError: ``
      });
      this.save();
    }
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div>
        <div>{/* <h5>{JSON.stringify(this.state.data)}</h5> */}</div>
        <hr />
        {/* <p>{this.state.duplicateProdIdError}</p> */}
        {/* <input type="button" onClick={this.save.bind(this)} /> */}
        {/* <hr /> */}
        <form className="form-group">
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <hr />
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.ProdId
            )}`}
          >
            <div className="container">
              <table className="table table-bordered table-striped">
                <tbody>
                  <tr>
                    <td>ProdId</td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        name="ProdId"
                        value={this.state.ProdId}
                        onChange={this.handleProdIdChange.bind(this)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>ProdName</td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        name="ProdName"
                        value={this.state.ProdName}
                        onChange={this.handleProdNameChange.bind(this)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        name="Price"
                        value={this.state.Price}
                        onChange={this.handlePriceChange.bind(this)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>CategoryName</td>
                    <td>
                      <select
                        className="form-control"
                        name="CategoryName"
                        value={this.state.CategoryName}
                        onChange={this.handleCategoryNameChange.bind(this)}
                      >
                        {this.state.Categories.map((val, index) => (
                          <Options key={index} name={val} />
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Manufacturer</td>
                    <td>
                      <select
                        className="form-control"
                        name="Manufacturer"
                        value={this.state.Manufacturer}
                        onChange={this.handleManufacturerChange.bind(this)}
                      >
                        {this.state.Manufacturers.map((val, index) => (
                          <Options key={index} name={val} />
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        className="btn btn-default"
                        onClick={this.clear.bind(this)}
                      >
                        New
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={this.saveRow.bind(this)}
                      >
                        Save
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
          </div>
        </form>
        <div className="container">
          <table className="table table-bordered table-striped">
            {/* <thead>
              <tr>
                {Object.keys(this.state.data[0]).map((entry, index) => (
                  <td key={index}>{entry}</td>
                ))}
              </tr>
            </thead> */}
            <tbody>
              {this.state.data.map((prd, index) => (
                <TableRow
                  key={index}
                  row={prd}
                  //   cbRowClickParent={this.handleRowClick.bind(this)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

class Options extends Component {
  render() {
    return <option value={this.props.name}>{this.props.name}</option>;
  }
}

class TableRow extends Component {
  onRowclick() {
    this.props.cbRowClickParent(this.props.row);
  }
  render() {
    return (
      <tr onClick={this.onRowclick.bind(this)}>
        <td>{this.props.row.ProdId}</td>
        <td>{this.props.row.ProdName}</td>
        <td>{this.props.row.Price}</td>
        <td>{this.props.row.CategoryName}</td>
        <td>{this.props.row.Manufacturer}</td>
      </tr>
    );
  }
}

export default ProductServiceComponent;
