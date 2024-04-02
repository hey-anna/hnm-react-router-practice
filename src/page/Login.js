import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenciateAction";

function Login({ setAuthenticate }) {
  // Form 주의
  // Form이 버튼을 포함해서 모든것을 감싸고 있다

  // 보통 로그인하고 싶으면, 요청을 서버 백엔드로 보내서, 거기서 아이디와 비밀번호(패스워드가) 맞는지 확인한다.

  // Form이란 ?
  // 어떤 유저한테 정보를 받고 > 입력받은 정보를 가지고 백엔드로 보내고 싶을 때, 사용하는게 form

  // 특징
  // 내가 로그인 버튼을 누르자나 > 그러면 리프레쉬 되는거 보여?,,
  // 로그인 하는순간, 서버에 요청이 되면서 > 얘가 자동으로 한번 리프레쉬 합니다.
  // 그냥 클릭이벤트랑 조금 다르다 > 이 이벤트를 onSubmit이라고 한다.

  // Form 태그 안에 버튼이 있고, 이 버튼의 type이 submit이면 > 제출을 하는 전용버튼이다.
  // !! 그래서 얘는 onClick으로 이벤트를 주면 안된다 !!!
  // !!!! onSubmit으로 주면된다.

  // S - E
  // 03 그리고 당연히 여기에 받아와야 한다.
  // 그리고 이 이벤트 주는 함수가, 이럴때 쓰라고 주는 함수가 있다preventDefault
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log("###navigate", navigate);

  // 로그인 미들웨어로 구현하기!!
  // 미들 웨어로 구지 않보내도 되는데 연습을 위해 해보자
  // 로그인 함수도 async라고 가정을 하고!(실제는 async가 맞음)
  // !! 해줘야 하는거 정리
  // 로그인을 시도를 하면 유저 id와 password autheticate 정보 변경 !
  // autheticate가 true인지 false인지 요 세개의 정보를 저장

  const dispatch = useDispatch();
  const loginUser = (event) => {
    // 01 console.log("login user function issue"); // 버튼을 누르는 순간, 내용이 나타났다 금방 사라진다. 특성때문 so, form이 매번 리프레쉬하는것을 막아줘야 한다.
    event.preventDefault(); // 리프레쉬, 렌더 안한다
    console.log("login user function issue");
    // setAuthenticate(true);
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  };

  // 02 form자체에서 주는 이벤트가 있는데
  // 이 이벤트를 파라미터 값으로 받아오겠다.

  // 결론
  // form을 사용하게 되면 always event.preventDefault();를 써줘라
  // 페이지가 계속 리프레쉬하는것을 맞아줄 수 있다

  return (
    <Container className="login-form-container">
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <FontAwesomeIcon icon={faEnvelope} /> Email addres
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setID(event.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <FontAwesomeIcon icon={faLock} /> Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="login-btn" variant="danger" type="submit">
          <FontAwesomeIcon icon={faSignInAlt} />
          <h2 className="login-form-heading">로그인</h2>
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
