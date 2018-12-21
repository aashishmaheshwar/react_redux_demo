import React from "react";
import ReactDom from "react-dom";
// 1. importing "ceateStore" will create application store
// 2. importing "Provider" will make the store available for all components
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "!style!css!bootstrap/dist/css/bootstrap.min.css";
import FirstComponent from "./components/firstComponent.jsx";
import DataComponent from "./components/statefulComponent.jsx";
import ParentComponent from "./components/communicationComponent.jsx";
import ProductComponent from "./components/applicationComponent.jsx";
import DemoUncontrolledComponent from "./components/uncontrolledComponent.jsx";
import ProductServiceComponent from "./components/productComponent.jsx";
import ParentMasterComponent from "./components/onDemandComponent.jsx";
import MainCompoent from "./components/routing-app/mainComponent.jsx";
// 3. importing the main application component
import MainApplicationComponent from "./react-redux-app/mainApplicationComponent.jsx";
// 4. import reducer (Note: this will be default to combinereducer)
import reducer from "./react-redux-app/reducers/reducers"; // testing

// 5. creating a store that is monitored by (add/update/read) by reducer
let store = createStore(reducer);

// 6. use provider to manage Rendering and store for the application

ReactDom.render(
  // <BrowserRouter>
  //   <MainCompoent choice={false} />
  // </BrowserRouter>,
  <Provider store={store}>
    <MainApplicationComponent />
  </Provider>,
  document.getElementById("app")
);
