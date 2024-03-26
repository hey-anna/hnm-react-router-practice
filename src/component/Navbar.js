import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { fas, far, fal } from "@awesome.me/kit-KIT_CODE/icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
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
  return (
    <>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <div className="login-txt-style">로그인</div>
      </div>

      <div className="nav-section">
        <img
          width={100}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1968-1999.png"
          alt="로고"
        />
      </div>
      <div className="menu-area">
        {/* <ul>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul> */}
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
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
            class="border-bottom"
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
