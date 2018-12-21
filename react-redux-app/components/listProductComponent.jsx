import React, { Component } from "react";

class ProductListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   Products: []
    };
    this.displayRows.bind(this);
  }

  handleRowClick(row) {
    // this.setState({ addClicked: false });
    // use dispatch here to dispatch 'update action' and modify the state 'or'
    // call parent dispatch
    this.props.populateSelectedRow(row);
  }

  displayRows() {
    // this.props.listproductsreducer.forEach(element => {
    //   console.log(element);
    // });
    return (
      <tbody>
        {this.props.listproductsreducer.map((prd, index) => (
          <TableRow
            key={index}
            row={prd}
            cbRowClickParent={this.handleRowClick.bind(this)}
          />
        ))}
      </tbody>
    );
  }
  render() {
    return (
      <div className="container">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <td>ProductId</td>
              <td>ProductName</td>
            </tr>
          </thead>
          {this.displayRows()}
          {/* <tbody>
            {this.props.listproductsreducer.map((prd, index) => (
              <TableRow key={index} row={prd} />
            ))}
          </tbody> */}
        </table>
      </div>
    );
  }
}

class TableRow extends Component {
  constructor(props) {
    super(props);
    // console.log("the props are", this.props);
  }
  onRowclick() {
    this.props.cbRowClickParent(this.props.row.product);
  }
  render() {
    return (
      <tr onClick={this.onRowclick.bind(this)}>
        <td>{this.props.row.product.productId}</td>
        <td>{this.props.row.product.productName}</td>
      </tr>
    );
  }
}

export default ProductListComponent;
