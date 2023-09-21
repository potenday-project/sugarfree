import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function KakaoLogin() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  // oauth 요청 URL
  const kakaoURL =
    "https://kauth.kakao.com/oauth/authorize?client_id=0ec1fab818767700e9349aa13456eab9&redirect_uri=http://localhost:5173/login&response_type=code";

  const handleLogin = async () => {
    window.location.href = kakaoURL;
    const code = new URL(window.location.href).searchParams.get("code");
    setCode(code);
    //   await axios.post(
    //     "",
    //     { code },
    //     { headers: { "Content-Type": "application/json" } }
    //   );
    window.location.href = "/map";
  };
  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
}
