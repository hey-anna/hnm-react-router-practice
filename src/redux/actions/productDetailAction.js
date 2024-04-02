// // import { useParams } from "react-router-dom";

// function ProductDetail(id) {
//   //   let { id } = useParams();
//   return async (dispatch, getState) => {
//     // let searchQuery = query.get("q") || "";
//     // console.log("### searchQuery 쿼리값은?", searchQuery);
//     let url = `https://my-json-server.typicode.com/hey-anna/hnm-react-router-practice/products/${id}`;
//     // setProductList(data);
//     let response = await fetch(url);
//     let data = await response.json();
//     // console.log(data);
//     dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { data } });
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

// export const productDetailAction = { ProductDetail };

// // 다른 파일에 있는것을 받으려면 항상 expport
// // productAction이라는 객체를 반환할건데
// // 그 객체안에는 getProducts 이 함수가 들어있다.
// // 이 함수를 객체에 담아줄거야
// // 앞으로 이함수가 여러개가 될 것이다.
// // 우리의 동작에 따라

// // !! so, 여러개의 함수를 하나의 객체에 담아서 리턴할 예정
