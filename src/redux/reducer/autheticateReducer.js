let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

function authenticateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      console.log("login success reducer");
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    case "LOGOUT_SUCCESS": // 로그아웃 액션 처리 추가
      console.log("logout success");
      return {
        ...state,
        id: "",
        password: "",
        authenticate: false, // authenticate를 false로 설정
      };
    default:
      return { ...state };
  }
}

export default authenticateReducer;
