import { createSlice } from "@reduxjs/toolkit";
// createSlice 객체를 매개변수로 받는 친구
// name / initialState / reducers 반드시 있어야 함
//https://ko.redux.js.org/tutorials/quick-start

// 객체
let initialState = {
  productList: [],
  selectedItem: null,
};

// ** 기존에 낡은 리덕스 S
// 리듀서는 함수
// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     // case "GET_PRODUCT_SUCCESS":
//     //   return { ...state, productList: payload.data };
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_SINGLE_PRODUCT_SUCCESS":
//       return { ...state, selectedItem: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;
// ** 기존에 낡은 리덕스 E

// 알아서 닷닷닷 스테이트를 해준다.
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.productList = action.payload.data;
    },
    getSingleProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
});

console.log("## productSlice", productSlice);

export default productSlice.reducer;
