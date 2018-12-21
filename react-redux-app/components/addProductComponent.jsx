import React, { Component } from "react";

class NewProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   currentState: {
      //     productId: this.props.productid,
      //     productName: this.props.productName
      //   },
      update: false
    };
  }

  save() {
    //   1. define product object
    let product = {};
    //   2. store data read from textboxes into the product object
    product.productId = this.refs.productid.value;
    product.productName = this.refs.productname.value;
    // if (
    //   this.props.SelectedRow.productId === product.productId &&
    //   this.props.SelectedRow.productName === product.productName
    // ) {
    if (
      this.props.SelectedRow.productId !== "" &&
      this.props.SelectedRow.productName !== ""
    ) {
      // update product. propagate to parent here
      this.props.callupdateCB(this.props.SelectedRow, product);
      this.props.EmptyRowAfterSave(product); // check this
    } else {
      // 3. define a props method that will be reponsible to dispatch
      // the product to the action method
      this.props.AddProductClick(product);
      this.props.EmptyRowAfterSave(product);
    }

    // 4. clear text boxes
    this.refs.productid.value = "";
    this.refs.productname.value = "";
  }

  componentDidUpdate() {
    if (
      this.props.SelectedRow.productId === "" &&
      this.props.SelectedRow.productName === ""
    ) {
      this.refs.productid.value = "";
      this.refs.productname.value = "";
    } else {
      this.refs.productid.value = this.props.SelectedRow.productId;
      this.refs.productname.value = this.props.SelectedRow.productName;
      //   this.setState({
      //     currentState: {
      //       productId: this.props.productid,
      //       productName: this.props.productName
      //     }
      //   });
      //   this.setState({ update: true });
    }
  }

  //   handleProductIdChange(e) {
  //     // this.setState({ ProductID: e.target.value });
  //     this.props.SelectedRow.productId = this.refs.productid.value;
  //   }
  //   handleProductNameChange(e) {
  //     // this.setState({ ProductID: e.target.value });
  //     this.props.SelectedRow.productName = this.refs.productname.value;
  //   }

  render() {
    return (
      //   <form action="" className="form-group">
      <div className="container">
        <label htmlFor="ProdId" className="form-control" />
        <input
          type="text"
          ref="productid"
          name="ProdId"
          className="form-control"
          //   value={this.props.SelectedRow.productId}
          //   onChange={this.handleProductIdChange.bind(this)}
        />
        <label htmlFor="ProdName" className="form-control" />
        <input
          type="text"
          ref="productname"
          name="ProdName"
          className="form-control"
          //   value={this.props.SelectedRow.productName}
          //   onChange={this.handleProductNameChange.bind(this)}
        />
        <br />
        <input
          type="button"
          value="save"
          onClick={this.save.bind(this)}
          className="form-control"
        />
      </div>
      //   </form>
    );
  }
}

export default NewProductComponent;
