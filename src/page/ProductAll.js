import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

// 구글링 my json server

function ProductAll() {
  const [productList, setProductList] = useState([]);
  let [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    // let url = "http://localhost:5000/products";
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/hey-anna/hnm-react-router-practice/products?q=${searchQuery}`;

    // let response = await fetch(url);
    // let data = await response.json();
    // // console.log(data);
    // setProductList(data.products);
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      setProductList(data); // 여기를 수정했습니다.
    } catch (error) {
      console.error("Fetching products failed:", error);
      // 오류 발생 시 적절한 처리를 여기에 추가하세요.
    }
  };

  console.log("productList", productList);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="card-box-style">
        <Container>
          <Row>
            {/* props를 아이템을 메뉴로 내려준다 */}
            {productList.map((menu) => (
              <Col lg={3}>
                <ProductCard item={menu} />
              </Col>
            ))}
          </Row>
          {/* <ProductCard /> <ProductCard /> <ProductCard /> <ProductCard /> */}
        </Container>
      </div>
    </>
  );
}

export default ProductAll;
