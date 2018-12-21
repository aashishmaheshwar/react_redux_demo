import React, { Component } from "react";
// 1. import action creator
import { addProduct, updateProduct } from "./actions/actions";
// 2. import "connect" to connect react with redux i.e. props/state to store
import { connect } from "react-redux";
import NewProductComponent from "./components/addProductComponent.jsx";
import ProductListComponent from "./components/listProductComponent.jsx";

class MainApplicationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: {
        productId: "",
        productName: ""
      }
    };
  }
  onRowSelect(selectedRow) {
    this.setState({ selectedRow });
  }
  emptySelectedRowOnSave() {
    this.setState({
      selectedRow: {
        productId: "",
        productName: ""
      }
    });
  }
  //   updateRow(oldRow, newrow) {

  //   }
  render() {
    // components to dispatch action
    //   component must get the corresponding data from store and list this
    // define the props constants for "dispatch" and "visisbleproducts"

    const { dispatch, visibleproducts } = this.props;

    // use "AddProductClick" props for NewProductComponent and dispatch
    // "addProduct" action and pass parameter to it
    // use "listproductsreducer" props for ProductListComponent and pass "visibleprodctus" to it
    return (
      <div className="container">
        <NewProductComponent
          AddProductClick={product => dispatch(addProduct(product))}
          SelectedRow={this.state.selectedRow}
          EmptyRowAfterSave={this.emptySelectedRowOnSave.bind(this)}
          //   callupdateCB={this.updateRow.bind(this)}
          callupdateCB={(oldRow, newRow) =>
            dispatch(updateProduct(oldRow, newRow))
          }
        />
        <hr />
        <ProductListComponent
          listproductsreducer={visibleproducts}
          populateSelectedRow={this.onRowSelect.bind(this)}
        />
      </div>
    );
  }
}
// temp: product => dispatch(returnSelectedProduct)

// 5. write a method that will map state to props
// this method will read the state returned by the reducer (from store)
// and will be assigned to the visible products props
function mapStateToProps(state) {
  return {
    visibleproducts: state.listproductsreducer
  };
}

// 6. connect the component with the mapStateToProps
// this uses "connect" object from "redux" and map component with store under provider

export default connect(mapStateToProps)(MainApplicationComponent);
