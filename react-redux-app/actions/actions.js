// 1. define the action constant

export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

// 2. define an action creator
// the method that contains the logic for the ACTION
// this can be written in a seperate file.
// this accepts "PAYLOAD", i.e. the data to be dispatched with the action
// when it is initiated from the view.
// the method returns the object that contains action type and the manipulated payload

export function addProduct(product) {
  // logic to be executed by action creator
  // this may call method from other file
  // e.g. service.js
  return {
    type: ADD_PRODUCT,
    product
  };
}

export function updateProduct(oldproduct, newproduct) {
  return {
    type: UPDATE_PRODUCT,
    oldproduct,
    newproduct
  };
}

export function deleteProduct(productToDelete) {
  return {
    type: DELETE_PRODUCT,
    productToDelete
  };
}
