import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";

function ProductAll() {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = "http://localhost:5000/products";
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProductList(data);
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
