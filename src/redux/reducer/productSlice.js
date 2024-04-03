import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// createSlice 객체를 매개변수로 받는 친구
// name / initialState / reducers 반드시 있어야 함
//https://ko.redux.js.org/tutorials/quick-start

// 객체
let initialState = {
  productList: [],
  selectedItem: null,
  isLoding: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/hey-anna/hnm-react-router-practice/products?q=${searchQuery}`;
      // setProductList(data);
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
// 액션이름이 뭔지 알여주기
// L 프로덕트에서 전체아이템을 가져오는 친구다

// 데이터 서치조건, 프로덕아이디 >> api호출하기전에 내가 필요한 정보를 넘기는 정보를 알규먼트라는 싱글벨류에서 받을 수 있다

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

// 리덕스는 비동기를 아무데나 사용 x, 스테이트 한군데 집중

// 알아서 닷닷닷 스테이트를 해준다.

// 리듀서는 비동기 필요없이 바로바로 해출,,, 이뇽 못씀
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getAllProducts(state, action) {
    //   state.productList = action.payload.data;
    // },
    getSingleProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
  // 외부로 부터 state가 바뀌는 경우(비동기 주로 처리)
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoding = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      });
  },
  //
});

// console.log("## productSlice", productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
