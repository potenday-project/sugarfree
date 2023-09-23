export default function KakaoLogin_2() {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=65730ce4d847f9f7e07176bc6e9db3b0&redirect_uri=http://b232-175-192-26-222.ngrok-free.app/auth/idpresponse/kakao&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = link;
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
          <img className="btng" alt="Btng" src="/images/btng-2.png" />
        </div>
        <div></div>
        <div className="text-wrapper-4">네이버 로그인</div>
      </div>
    </div>
  );
}
