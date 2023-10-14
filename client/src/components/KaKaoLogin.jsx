import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const P = styled.p`
  z-index: 5;
  position: absolute;
  cursor: pointer;
  left: 159px;
  bottom: 65px;
  color: #252525;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.15px;
`;

const P2 = styled.p`
  position: absolute;
  left: 159px;
  bottom: 125px;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.15px;
  cursor: pointer;
`;

const Img = styled.img`
  cursor: pointer;
  bottom: 49px;
  position: absolute;
  left: 20px;
`;

const Img2 = styled.img`
  cursor: pointer;
  position: absolute;
`;

const Img3 = styled.img`
  cursor: pointer;
  position: absolute;
  top: 12px;
  left: 10px;
  bottom: 11px;
`;

const Div = styled.div`
  width: 350px;
  height: 50px;
  position: absolute;
  bottom: 109px;
  left: 20px;
`;

const Title = styled.p`
  top: 285px;
  left: 20px;
  position: absolute;
  color: #2ab7c0;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 44.8px */
  letter-spacing: -0.32px;
`;

export default function KakaoLogin() {
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  // oauth 요청 URL
  //const kakaoURL =
  //"https://kauth.kakao.com/oauth/authorize?client_id=0ec1fab818767700e9349aa13456eab9&redirect_uri=http://localhost:5173/name&response_type=code";

  const handleLogin = async () => {
    // window.location.href = kakaoURL;
    // const code = new URL(window.location.href).searchParams.get("code");
    // setCode(code);
    //   await axios.post(
    //     "",
    //     { code },
    //     { headers: { "Content-Type": "application/json" } }
    //   );
    navigate("/name");
  };

  const handleLogin2 = async () => {
    navigate("/name");
  };

  return (
    <>
      <Title>환영해요!</Title>
      <Img onClick={handleLogin} src="images/kakaologin.png" />
      <Div>
        <Img2 onClick={handleLogin} src="images/naverBtn.svg" />
        <Img3 onClick={handleLogin} src="images/naverBtn2.svg" />
      </Div>

      <P onClick={handleLogin}>카카오 로그인</P>
      <P2 onClick={handleLogin2}>네이버 로그인</P2>
    </>
  );
}
