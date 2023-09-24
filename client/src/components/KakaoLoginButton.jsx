export default function KakaoLoginButton() {
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=17414f65711c4da6b10f0fdd69ea262c&redirect_uri=http://b232-175-192-26-222.ngrok-free.app/auth/idpresponse/kakao&response_type=code`;

  const kakaoLogin = () => {
    window.location.href = link;
  };

  return <button onClick={kakaoLogin}>카카오로 로그인</button>;
}
