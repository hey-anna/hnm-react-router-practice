// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
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
// 모바일 버전에서 메뉴는 사이드 메뉴로 들어간다. 제품 사진들은 한장씩 세로로 나온다.

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true 면 로그인 됨 false면 로그인 안된
  useEffect(() => {
    console.log("### authenticate", authenticate);
  }, [authenticate]);
  // authenticate 값이 바뀔 때 마다 프린트를 하겠다.

  // const PrivateRoute = () => {
  //   return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  // };
  return (
    <>
      <Navbar
        isAuthenticated={authenticate}
        setAuthenticate={setAuthenticate}
      />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
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
        <Route
          path="/product/:id"
          element={
            <PrivateRoute authenticate={authenticate}>
              <ProductDetail />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
