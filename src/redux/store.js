import { createStore, applyMiddleware } from "redux";
// import productReducer from "./reducer/productReducer";
// import { thunk } from "redux-thunk";
import { thunk } from "redux-thunk";
import rootReducer from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
// import authenticateReducer from "./reducer/autheticateReducer";
// import authenticateReducer from "./reducer/authenticateReducer";
// import authenticateReducer from "./reducer/authenticateReducer";
import authenticateReducer from "./reducer/authenticateReducer";
// import produ
import productReducer from "./reducer/productSlice";
// import productReducer

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

// 항상 이네가지를 세팅해야 했다
// combinereducer 옛날 썼움 >> 자동
// thunk도 써줬어야 했다. >> 자동
// applyMiddleware >> 자동셋업
// composeWithDevTools >> 자동셋업

export default store;
