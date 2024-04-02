// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
// import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";

// [목요일 과제]
// 1. 전체상품페이지/ 로그인/ 상품상세페이지 [ㅇ]
// 1.1 네비게이션 바 (서치박스 이쁘게 디자인 해보기) [ㅇ]
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다 [ㅇ]
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다 [ㅇ]
// 3. 상품 디테일을 눌렀으나, 로그인이 안되어 있을경우에는 로그인페이지가 먼저 나온다. [ㅇ]
// 4. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다 [ㅇ]

// 5. 로그아웃 버튼을 클릭하면 로그아웃이 된다. [ㅇ]
// 5. 로그아웃이 되면 상품 디테일페이지를 볼 수 없다, 다시 로그인 페이지가 보인다. [ㅇ]

// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다. [ㅇ]

// [금요일 과제]
// 7. 상품을 검색할 수 있다. [ㅇ]

// 과제 1
// 검색폼 꾸미기 [ㅇ]

// 과제 2
// concious choice 부분도 true이면 보이고 false이면 안보이게 해주세요. [ㅇ]
// 카드에 마우스를 올려두면 카드가 커지는 hover 이벤트를 만들어 주세요. [ㅇ]
// 로그인 버튼을 클릭하면 로그인 페이지가 나오게 스스로 도전해보세요! [ㅇ]
// 로그인 페이지의 디자인을 스스로 해보세요. [ㅇ]
// 메인페이지도 디자인 이쁘게 해라 [ㅇ]

// 8. Mini 과제
// 상품 디테일 페이지를 눌렀을 때, 로그인이 안된 경우 로그인 페이지가 보인다. [ㅇ]
// 상품 디테일 페이지를 눌렀을 때, 로그인이 된 경우 상품 디테일 페이지가 보인다. [ㅇ]

// 9. 상품 디테일 페이지 디자인 하기[ㅇ]

// 12 도전 과제 Comment
// 유저는 로그아웃 할 수 있다. [ㅇ]
// 로그인이된 상태이면 로그아웃버튼이, 로그아웃 된 상태이면 로그인 버튼이 보인다. [ㅇ]
// H&M로고를 클릭하면 상품 전체페이지로 돌아온다. [ㅇ]
// 모바일 버전에서 메뉴는 사이드 메뉴로 들어간다. 제품 사진들은 한장씩 세로로 나온다. [ㅇ]

// 미들웨어 사용방법 정리
// 디스패치에서 함수를 이용해야하고
// 그리고 액션이라는 미들웨어 함수를 저장해놓는 곳을 따로 만들어 줘야한다. 그리고 디스패치

// !!! 마지막 리덕스 정리
// 리덕스 동기적으로 state 처리
// 컴바인 리듀서, 객체 형태로 합쳐서 전달
// 객체 안에 키를 정의해놓고, 내가 원하는 리듀서를 할당해주면 된다
// 리듀서 합쳐줄때 컴바인 리듀서

// 상세페이지 기능 > 미들웨이 사용해서 기능 작동되게 하기
// getProductDetail 함수 미들웨어로 옮기기
// PrivateRoute와 App.js 수정하기 (더이상 App에 authenticate state가 있을 필요가 없습니다. 지워주시고 PrivateRoute도 props가 아닌 store에서 값을 가져오는걸로 수정해주세요!)

function App() {
  // const [authenticate, setAuthenticate] = useState(false); // true 면 로그인 됨 false면 로그인 안된
  // useEffect(() => {
  //   console.log("### authenticate", authenticate);
  // }, [authenticate]);
  // authenticate 값이 바뀔 때 마다 프린트를 하겠다.

  // const PrivateRoute = () => {
  //   return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  // };
  return (
    <>
      {/* <Navbar
        isAuthenticated={authenticate}
        setAuthenticate={setAuthenticate}
      /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
        {/* <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        /> */}
        {/* <Route
          path="/product/:id"
          element={
            <PrivateRoute authenticate={authenticate}>
              <ProductDetail />
            </PrivateRoute>
          }
        /> */}
        {/* // 예전 연습 S */}

        {/* <Route
          path="/product/:id"
          element={
            <PrivateRoute isAuthenticated={authenticate}>
              <ProductDetail />
            </PrivateRoute>
          }
        /> */}
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        {/* <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        /> */}
        {/* // 예전연습 E */}
      </Routes>
    </>
  );
}

export default App;
