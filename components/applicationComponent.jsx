import React, { Component } from "react";
import { privateDecrypt } from "crypto";

class ProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductID: 0,
      ProdName: "fd",
      Price: 0,
      CategoryName: "",
      Manufacturer: "",
      Categories: ["ECT", "ECL", "MEC", "CIV"],
      Manufacturers: ["MS", "LS", "TS"],
      Products: [
        {
          ProductID: 101,
          ProdName: "Laptop",
          Price: 45000,
          CategoryName: "ECL",
          Manufacturer: "MS"
        }
      ],
      searchResults: [],
      searchFieldOptions: ["ProdName", "CategoryName", "Manufacturer"],
      selectedSearchField: "ProdName",
      searchString: "",
      addClicked: true
    };
  }
  handleProductIdChange(e) {
    this.setState({ ProductID: e.target.value });
  }
  handleProdNameChange(e) {
    this.setState({ ProdName: e.target.value });
  }
  handlePriceChange(e) {
    this.setState({ Price: e.target.value });
  }
  handleCategoryNameChange(e) {
    this.setState({ CategoryName: e.target.value });
  }
  handleManufacturerChange(e) {
    this.setState({ Manufacturer: e.target.value });
  }
  handleSearchFieldChange(e) {
    this.setState({ selectedSearchField: e.target.value });
  }
  handleSearchStringChange(e) {
    this.setState({ searchString: e.target.value });
    const searchString = e.target.value;
    // console.log(searchString);
    let temp = this.state.Products.slice();
    if (searchString === "") {
      this.setState({ Products: this.state.searchResults });
    }
    // this.setState({ searchResults: temp }); // for saving the original array

    // console.log(temp.length);
    temp = temp.filter(
      row => row[this.state.selectedSearchField].indexOf(searchString) !== -1
    );

    // console.log("temp.length is ", temp);
    if (temp.length !== 0) {
      this.setState({ Products: temp });
    }

    // this.setState({ searchString: e.target.value });
    // this.setState({ Products: temp }); // original data is lost. find a way
  }
  clear() {
    this.setState({ ProductID: 0 });
    this.setState({ ProdName: "" });
    this.setState({ Price: 0 });
    this.setState({ CategoryName: "" });
    this.setState({ Manufacturer: "" });
    this.setState({ addClicked: true });
  }
  save() {
    // save data in a products array
    // 1. create a new array having same structure of Products array
    let temp = this.state.Products.slice();
    // 2. Push state values to the temp array
    if (this.state.addClicked) {
      let isRowPresent = false;
      for (let i = 0; i < temp.length; i++) {
        // console.log("am i here first", this.state.ProductID, temp[i].ProductID);
        if (+this.state.ProductID === +temp[i].ProductID) {
          isRowPresent = true;
          break;
        }
      }
      // console.log("is row present value is", isRowPresent);
      if (isRowPresent) {
        this.setState({ addClicked: true });
        alert(`Don't enter row with duplicate ProductID`);
      } else {
        temp = temp.filter(row => row.ProductID !== this.state.ProductID);
        temp.push({
          ProductID: this.state.ProductID,
          ProdName: this.state.ProdName,
          Price: this.state.Price,
          CategoryName: this.state.CategoryName,
          Manufacturer: this.state.Manufacturer
        });
        temp = temp.sort((a, b) => a.ProductID - b.ProductID);
        // 3. Update the products array based on temp array
        this.setState({ Products: temp });
        this.setState({ searchResults: temp });
        this.setState({ addClicked: true });
      }
    } else {
      temp = temp.filter(row => row.ProductID !== this.state.ProductID);
      temp.push({
        ProductID: this.state.ProductID,
        ProdName: this.state.ProdName,
        Price: this.state.Price,
        CategoryName: this.state.CategoryName,
        Manufacturer: this.state.Manufacturer
      });
      temp = temp.sort((a, b) => a.ProductID - b.ProductID);
      // 3. Update the products array based on temp array
      this.setState({ Products: temp });
      this.setState({ searchResults: temp }); // for temporary values
      this.setState({ addClicked: true });
    }
  }
  handleRowClick(row) {
    const { ProductID, ProdName, Price, CategoryName, Manufacturer } = row;
    this.setState({ ProductID });
    this.setState({ ProdName });
    this.setState({ Price });
    this.setState({ CategoryName });
    this.setState({ Manufacturer });
    this.setState({ addClicked: false });
  }
  render() {
    return (
      <div>
        <div className="container">
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <td>
                  <select
                    className="form-control"
                    name="selectedSearchField"
                    value={this.state.selectedSearchField}
                    onChange={this.handleSearchFieldChange.bind(this)}
                  >
                    {this.state.searchFieldOptions.map((val, index) => (
                      <Options key={index} name={val} />
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    name="SearchString"
                    value={this.state.searchString}
                    className="form-control"
                    onChange={this.handleSearchStringChange.bind(this)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <table className="table table-bordered table-striped">
            <tbody>
              <tr>
                <td>ProductID</td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    name="ProductID"
                    value={this.state.ProductID}
                    onChange={this.handleProductIdChange.bind(this)}
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
                    onClick={this.save.bind(this)}
                  >
                    save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <div className="container">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                {Object.keys(this.state.Products[0]).map((entry, index) => (
                  <td key={index}>{entry}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.Products.map((prd, index) => (
                <TableRow
                  key={index}
                  row={prd}
                  cbRowClickParent={this.handleRowClick.bind(this)}
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
        <td>{this.props.row.ProductID}</td>
        <td>{this.props.row.ProdName}</td>
        <td>{this.props.row.Price}</td>
        <td>{this.props.row.CategoryName}</td>
        <td>{this.props.row.Manufacturer}</td>
      </tr>
    );
  }
}

export default ProductComponent;
