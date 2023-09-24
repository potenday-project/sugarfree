import axios from "axios";
import { useNavigate } from "react-router-dom";

// KakaoLoginButton 컴포넌트

export default function KakaoLogin_2() {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=17414f65711c4da6b10f0fdd69ea262c&redirect_uri=http://b232-175-192-26-222.ngrok-free.app/auth/idpresponse/kakao&response_type=code`;

  const navigate = useNavigate();

  const kakaoLogin = () => {
    window.location.href = link;
    const code = new URL(location.toString()).searchParams.get("code"); // 이상한코드가한가득
    axios.post("", { code });
    navigate("/name");
  };

  return (
    <div className="iphone-mini">
      <div className="div">
        <div></div>
        <div className="text-wrapper">스타벅스 신촌점</div>
        <div className="text-wrapper-2">환영해요!</div>
        <div className="overlap">
          <div className="group">
            <div className="rectangle" />
          </div>
          <div className="text-wrapper-3" onClick={kakaoLogin}>
            카카오 로그인
          </div>
        </div>
        <div className="overlap-group">
          <img
            className="btng"
            alt="Btng"
            src="../../public/images/btng-2.png"
          />
        </div>
        <div className="text-wrapper-4">네이버 로그인</div>
      </div>
    </div>
  );
}
