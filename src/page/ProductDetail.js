import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Option from "../component/Option";
import SellBtn from "../component/SellBtn";
import { productAction } from "../redux/actions/productAction";
// import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../redux/reducer/productSlice";

const ProductDetail = () => {
  let { id } = useParams();
  // const [product, setProduct] = useState(null);
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
    // let url = `http://localhost:5000/products/${id}`;
    // let url = `https://my-json-server.typicode.com/hey-anna/hnm-react-router-practice/products/${id}`;
    // let response = await fetch(url);
    // let data = await response.json();
    // console.log("### data", data); // 데이터 가져와서 뿌려주기, 스테이트에다가 저장하자
    // setProduct(data);
    // try {
    //   let response = await fetch(url);
    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }
    //   let data = await response.json();
    //   setProduct(data);
    // } catch (error) {
    //   console.error("Fetching product detail failed:", error);
    // }
  };
  // id값은 항상 동적으로 변경되야 하니, 이숫자를 읽어서 넣어줘야 한다.
  // 이 숫자를 읽어주는게 유즈파남스

  // useEffect(() => {
  //   getProductDetail();
  // }, []);
  // getProductDetail를 호출할 때 마다 setProduct를 가져올 수 있다
  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetail(id));
    }
  }, [id, dispatch]);
  return (
    <Container className="product-container">
      <Row>
        <Col className="product-img" xs={6}>
          <img
            style={{ width: "100%" }}
            src={product?.img}
            alt={product?.title}
          />
        </Col>
        <Col className="product-txt">
          <h3>{product?.title}</h3>
          <div style={{ fontSize: "24px" }}>
            <span style={{ fontSize: "30px", paddingRight: "6px" }}>₩</span>
            {product?.price}
          </div>
          <Option options={product?.size || []} />
          <div className="italic font-weigh-bold">
            {product?.choice === true ? "choice" : ""}
          </div>
          <div className="italic font-weigh-bold">
            {product?.new === true ? "New" : ""}
          </div>
          <SellBtn />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
