import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { fas, far, fal } from "@awesome.me/kit-KIT_CODE/icons";
import {
  faMagnifyingGlass,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

// mouse change pointer

// 키를 입력했을 때 이벤트를 호출시킬 수 있는 > onKeyPress
// 언제 생성되냐? 내가 키를 입력하면 생성 됨
// onKeyPress 발생한다 ? 언제 ? 유저가 키를 눌렀을 때
// not fire alt ctrl esc 에 대해서는 동작하지 않는다. > 그 외에 키는 동작한다.
// 이벤트 함수를 자동으로 보내준다.
// 그러면 search가 이벤트라는 얘를 받게된다.

// !! 모든 이벤트 리스너는 이벤트를 매개변수로 넘겨줌

// 그러면 받은 이벤트를 가지고 우리는 뭘 할것이냐

// 만약에 이벤트에 있는 key가 Enter이다?
// 그러면 콘솔로그를 체크하게 해봄

function Navbar({ isAuthenticated, setAuthenticate }) {
  const menuList = [
    "Women",
    // "Divided",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  // 사이드 메뉴
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  //   const toggleSideMenu = () => {
  //     if (isSideMenuOpen) {
  //       setIsSideMenuOpen(false); // 사이드 메뉴가 보인다면 숨깁니다.
  //     } else {
  //       setIsSideMenuOpen(true); // 사이드 메뉴가 숨겨져 있다면 보이게 합니다.
  //     }
  //   };

  //   const toggleSideMenu = () => {
  //     // 화면 너비가 768px 이하인 경우에만 사이드 메뉴 토글
  //     if (window.innerWidth < 768) {
  //       setIsSideMenuOpen(!isSideMenuOpen);
  //     }
  //   };

  // 로그인페이지 이동
  const goToLogin = () => {
    navigate("/login");
  };
  // 사용자 로그아웃
  const logoutUser = () => {
    setAuthenticate(false);
    navigate("/login");
  };

  // 자바스크립트는 value에 읽어오고싶은 값이 들었지만
  // 리액트는 조금 다른다. 우리가 읽어오고 싶은값이 이벤트애 들어가 있다
  // let keyword = >>>> e.target.value; 이 벨류안에 우리가 입력한 키워드가 있다.

  // 우리가 input안에 있는 값을 읽어오고 싶을애는 저번에 자바스크립트처럼 value 쓰는게 아니고

  // 리액트
  // e.target.value; 사용하면 이 인풋안에 있는 값을 읽어올 수 있다.
  // 외워둬라
  //

  // 파라미터 값이 아니라 쿼리값이다.
  //  ?q=검색어

  // 어떤 값이 들어갈 것이냐? 우리가 이번에 할것은 쿼리이다.
  // 파라미터 값이 아닌 쿼리값을 우리는 서치하는 것이다.
  // ?q=검색어
  // 추가적인 조건에 대해서는 쿼리를 붙인디ㅏ.

  // 추가적인 조건

  const search = (e) => {
    if (e.key === "Enter") {
      console.log("We click this key", e.key);
      // 입력한 검색어를 읽어와서
      let keyword = e.target.value;
      console.log("keyword", keyword);
      // console.log("onKeyDown");

      // url을 바꿔준다.(Url뒤에 파라미터 추가하며 됨) >> navogafe
      navigate(`/?q=${keyword}`);
      // 어떤 데이터와 갈거냐하면, 큐는 바로 쿼리값을 받아와야 한다.
      // 키워드 읽어와서, 그것을 url에 넣어주는것까지 우리가 했어
      // 넣어주면 뭐할꺼야, 검색이 안되는데
      // 검색기능을 어떻게 해줄것이냐면,
      // 쿼리에 있는 글자를 읽어와서
      // 이키워드를 가진얘가 있는지 다시 검사를 해준다. >> 이부분 해보자 >> ProductAll로 이동해서 해보잡
    }
    // console.log("onKeyDown");
  };

  // 쿼리에 있는 글자를 읽어와서 검색을 해준다.

  return (
    <>
      {/* 사이드메뉴 및 버튼 */}
      <div className="mobile-top">
        <button className="menu-toggle" onClick={toggleSideMenu}>
          <FontAwesomeIcon icon={isSideMenuOpen ? faTimes : faBars} size="2x" />
        </button>
        {isAuthenticated ? (
          <div className="login-button" onClick={logoutUser}>
            <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
            <div className="login-txt-style">Logout</div>
          </div>
        ) : (
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} size="2x" />
            <div className="login-txt-style">Login</div>
          </div>
        )}
      </div>

      <div className="nav-section">
        <Link to="/">
          <img
            width={100}
            src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1968-1999.png"
            alt="로고"
          />
        </Link>
      </div>
      <div className="menu-area">
        {/* <ul>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul> */}
        <div className="binBox"></div>
        {/* {isSideMenuOpen && ( */}
        <ul
          // className="menu-list"
          className={`menu-list sidebar ${isSideMenuOpen ? "open" : ""}`}
          // style={{ display: isSideMenuOpen ? "block" : "none" }}
        >
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        {/* )} */}
        {/* <ul>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul> */}
        <div className="search">
          <button className="search-icon-sx">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            type="text"
            // placeholder="Search"
            placeholder="제품 검색"
            // id="icons-search"
            // name="icons-search"
            // class="rounded"
            className="border-bottom"
            onKeyDown={(e) => search(e)}
            // onKeyPress={}
          />
        </div>
        {/* <div>
          <input
            class="BaseInput-module--input__1yGxv Input-module--inputIcon__5pVpE"
            placeholder="제품 검색"
            autocomplete="off"
            role="combobox"
            autocapitalize="none"
            aria-owns="searchbar-autocomplete"
            aria-controls="searchbar-autocomplete"
            aria-autocomplete="list"
            aria-expanded="false"
            aria-label="제품 검색"
            minlength="1"
            maxlength="200"
            aria-required="false"
            type="search"
            tabindex="0"
          />
          <button
            class="CTA-module--action__1qN9s CTA-module--medium__1uoRl CTA-module--iconPosition-start__1xBvp IconButton-module--iconButton__Elq-T Input-module--icon__oV22P"
            tabindex="0"
            type="button"
          >
            <svg
              class="IconWrapper-module--icon__1nWiK IconWrapper-module--normal__2SFZ7"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              focusable="false"
            >
              <path d="M11 2a9 9 0 0 1 6.866 14.82l-.159.18 4.243 4.243-.707.707L17 17.708A9 9 0 1 1 11 2zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
            </svg>
            <span class="BodyText-module--general__jkobl ScreenReaderOnlyText-module--container__3-jJ8 BodyText-module--meta__5XWBG">
              제품 검색
            </span>
          </button>
        </div> */}
      </div>
      {/* <FontAwesomeIcon icon={faCoffee} /> */}

      {/* <FontAwesomeIcon icon={fas.faHouse} />
      <FontAwesomeIcon icon={far.faMouse} />
      <FontAwesomeIcon icon={fal.faCheese} /> */}
    </>
  );
}

export default Navbar;
