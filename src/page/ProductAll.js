import React, { useEffect, useState } from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";
// import { productAction } from "..redux/actions/productAction";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
// 구글링 my json server

// 쿼리가 있으면!!(키워드가 있으면) 쿼리를 붙여서 데이터 검색하기

// url에 있는 쿼리값을 읽어옵시다.
// !!! UseSearchParams라는 리액트 훅을 사용
// 약간의 useState처럼 사용된다.
// 쿼리안에는 query.get 사용하게 되면 내가 원하는 것을 읽어 올 수 있다.

// q라고 시작되는 것에 아이템을 가져다가 쿼리에 넣어줄 것이다.

// 앞으로 getProducts를 통해서 api함수를 호출할쩍에, 그냥 api 호출을 하는게 아니라, 쿼리에 있는 값을 넣어줄 것이다. ?q=${searchQuery}
// !! 만약에 Query값이 없는 경우에는 디폴트, 아무것도 없는 빈스트링 넣어줄게요

// !!! 한번실행되고 나서 검색해도 실행안된다 왜그럴까 ? 중요 한것 여기서 !!!
// useEffect는 언제 한번 콜이된다?
// 프로젝트 시작후 딱 한번 ( 실행할때 딱한번 호출)
// 이 getProducts를 언제다시 호출해줘야 함?
// query 쿼리 값이 바뀔 때 마다, 이함수가 호출되야 한다.
// 헤이 쿼리가 바뀌면 너도 다시 호출을 해줄래?

// ?? 이거 서치를 어떻게 하는 건가요? 내가 서치알고리즘을 만든것도 아니고 어떻게 큐하면 서치가 되는것이지?
// 이거는 제이슨서버에서 알아서 자동으로, 쿼리를 보내주면, 알아서, 자동으로 서치를 하게된다. ?q=${searchQuery}
// 서치하는 알고리즘에 대해서는 걱정할게 없다. 제이슨 서버에서 알아서 해주니깐
// 우리가 해줄게 뭐다? 서치해줄 큐 키워드를 넣어주면 알아서 해준다잉

function ProductAll() {
  // const [productList, setProductList] = useState([]);
  const productList = useSelector((state) => state.product.productList);
  let [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  // 이제여기서 해줘야 할일
  // productAction.js 만들어 놓은 미들웨어를 불러주야 한다.
  const getProducts = async () => {
    // let url = "http://localhost:5000/products";

    // 리덕스 미들웨어로 처리 S
    // 리덕스 미들웨어 함수(action creator)를 만들어줄거야 이코드로
    // 서치쿼리 정보를 알아야 한다.
    // 일규먼트로 서치쿼리값을 전달(매개변수로 전달)

    let searchQuery = query.get("q") || "";
    console.log("### searchQuery 쿼리값은?", searchQuery);
    dispatch(productAction.getProducts(searchQuery));
    // let url = `https://my-json-server.typicode.com/hey-anna/hnm-react-router-practice/products?q=${searchQuery}`;
    // setProductList(data) // 이거를 트라이캐치문으로 내려 나는 코드작성했움, 이거는 선생님이 구현한 부분이지만, 어디부분을 수정햇는지 표시하기 위해 추가해두고 주석처리 해둠
    // 리덕스 미들웨어로 처리 E

    // let response = await fetch(url);
    // let data = await response.json();
    // // console.log(data);
    // setProductList(data.products);
    // try {
    //   let response = await fetch(url);
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }
    //   let data = await response.json();
    //   setProductList(data); // 여기를 수정했습니다.
    // } catch (error) {
    //   console.error("Fetching products failed:", error);
    //   //   // 오류 발생 시 적절한 처리를 여기에 추가하세요.
    // }
  };

  // console.log("productList", productList);

  useEffect(() => {
    getProducts();
  }, [query]);
  // 헤이 쿼리가 바뀌면 너도 다시 호출을 해줄래?

  return (
    <>
      <div className="card-box-style">
        <Container>
          <Row>
            {/* props를 아이템을 메뉴로 내려준다 */}

            {productList.map((menu) => (
              // <Stack gap={3}>
              <Col lg={3} xs={6} className="p-2">
                <ProductCard item={menu} />
              </Col>
              // </Stack>
            ))}
          </Row>
          {/* <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard /> */}
        </Container>
      </div>
    </>
  );
}

export default ProductAll;
