// 객체
let initialState = {
  productList: [],
  selectedItem: null,
};

// 리듀서는 함수
function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    // case "GET_PRODUCT_SUCCESS":
    //   return { ...state, productList: payload.data };
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    case "GET_SINGLE_PRODUCT_SUCCESS":
      return { ...state, selectedItem: payload.data };
    default:
      return { ...state };
  }
}

export default productReducer;
