import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  // 길고 긴 이미지 대신에
  // 아이템에 이미지
  // 먼저, 아이템이 있는지 확인하고 항상
  // 있다면은? 거기에 이미지를 여기에 이미지로 주세요
  // <img src ={item?.img} />
  // 헤이 아이템이 있으면, 제목(타이틀)이라는 것을 보여주세요

  // true이면 신제품 표시, false이면 신제품이 아님니다.
  // 아이템이 있으면 item?
  const navigate = useNavigate();
  const showDetail = () => {
    // navigate('/product/:id')
    navigate(`/product/${item.id}`);
  };
  // 동적으로 변하는 다이나믹이라 :id 대신 ${}사용, 백틱으로 변경
  // 아이템에 있는 id값을, 파라미터 값을 동적으로 넘겨준다.
  return (
    <>
      <div className="card" onClick={showDetail}>
        <img src={item?.img} alt={item?.title} />
        <div>{item?.choice === true ? "choice" : ""}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new === true ? "New" : ""}</div>
        {/* <img
          width={300}
          src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F12%2F12%2F12127439f876cb534c5477a6586ab366f68186f7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]"
          alt="여성트렌치코트"
        /> */}
        {/* <div>Conscious choice</div>
        <div>벨티드 트윌 코트</div>
        <div>₩99900</div> */}
      </div>
    </>
  );
};

export default ProductCard;
