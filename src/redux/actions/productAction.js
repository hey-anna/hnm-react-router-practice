import { productActions } from "../reducer/productSlice";

// 미들웨어 함수들을 쫙 만들어줄거다 S
// 미들웨어 함수는 함수를 리턴한다.
// 2개의 매개변수가 있음
// dispatch 주는거고
// getState 현재의 정보를 여러분들이 받아 볼 수 있음

// 리덕스에서는 기능별로 action과 reducer파일을 나눔

// function getProducts(searchQuery) {
//   return async (dispatch, getState) => {
//     // let searchQuery = query.get("q") || "";
//     // console.log("### searchQuery 쿼리값은?", searchQuery);
//     let url = `https://my-json-server.typicode.com/hey-anna/hnm-react-router-practice/products?q=${searchQuery}`;
//     // setProductList(data);
//     let response = await fetch(url);
//     let data = await response.json();
//     // console.log(data);
//     // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } }); 옛날방식
//     dispatch(productActions.getAllProducts({ data }));
//     // try {
//     //     let response = await fetch(url);
//     //     if (!response.ok) {
//     //       throw new Error("Network response was not ok");
//     //     }
//     //     let data = await response.json();
//     //     setProductList(data); // 여기를 수정했습니다.
//     //   } catch (error) {
//     //     console.error("Fetching products failed:", error);
//     //     // 오류 발생 시 적절한 처리를 여기에 추가하세요.
//     //   }
//   };
// }
function getProductDetail(id) {
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/hey-anna/hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  };
  // }
  // export const productAction = { getProducts, getProductDetail };
}
export const productAction = { getProductDetail };
// 다른 파일에 있는것을 받으려면 항상 expport
// productAction이라는 객체를 반환할건데
// 그 객체안에는 getProducts 이 함수가 들어있다.
// 이 함수를 객체에 담아줄거야
// 앞으로 이함수가 여러개가 될 것이다.
// 우리의 동작에 따라

// !! so, 여러개의 함수를 하나의 객체에 담아서 리턴할 예정
