import { createStore, applyMiddleware } from "redux";
// import productReducer from "./reducer/productReducer";
// import { thunk } from "redux-thunk";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
