// import action
import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} from "./../actions/actions";
// import combine reducer
import { combineReducers } from "redux";
// write reducer functions aka pure functions
// the following method performs
// addProdct operation and returns newly added product
export function addProduct(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        product: action.product
      };
    default:
      return state;
  }
}

export function updateProduct(state, action) {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return {
        oldproduct: action.oldproduct,
        newproduct: action.newproduct
      };
    default:
      return state;
  }
}

export function deleteProduct(state, action) {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        productToDelete: action.productToDelete
      };
    default:
      return state;
  }
}

/**
 * the reducer function to list all products
 * this will call the addProduct() reducer function
 * when the product is added, it will immedicately return the modified
 * state that will provide the list of products
 */
export function listproductsreducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, addProduct(undefined, action)];
    case UPDATE_PRODUCT: {
      let stateTemp = [...state];
      const oldAndNew = updateProduct(undefined, action);
      stateTemp = stateTemp.filter(
        item =>
          item.product.productId !== oldAndNew.oldproduct.productId &&
          item.product.productName !== oldAndNew.oldproduct.productName
      );
      console.log("the statetemp is" + JSON.stringify(stateTemp));
      return [...stateTemp, { product: oldAndNew.newproduct }];
    }
    case DELETE_PRODUCT: {
      let stateTemp = [...state];
      const rowToDelete = deleteProduct(undefined, action).productToDelete;
      stateTemp = stateTemp.filter(
        item =>
          item.product.productId !== rowToDelete.productId ||
          item.product.productName !== rowToDelete.productName
      );
      return [...stateTemp];
    }
    default:
      return state;
  }
}

// use combinereducer to aggregate all reducer functions

let productreducer = combineReducers({
  listproductsreducer
});

/**
 * export the reducer
 */
export default productreducer;
