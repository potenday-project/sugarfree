import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RealDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  z-index: 5;
  position: absolute;
  cursor: pointer;
`;

const Img = styled.img`
  cursor: pointer;
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
  return (
    <>
      <RealDiv>
        <Img onClick={handleLogin} src="images/kakaologin.png" />
        <P onClick={handleLogin}>카카오 로그인</P>
      </RealDiv>
    </>
  );
}
