import { combineReducers } from "redux";
import authenticateReducer from "./autheticateReducer";
import productReducer from "./productReducer";
import productDetailReducer from "./productDetailReducer";

// 어떻게 쓰냐면
// 객체형태로 보내고 싶은 리듀서를 합치면 된다.
// 리듀서 합쳐줄때 오브젝트 형태로 넣어주었고,
// 각각의 키값안에 넣어 주었다.
// 어떤 리듀서에 있는 state를 읽어올지 얘기해줘야 한다.

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
  productDetail: productDetailReducer,
});
