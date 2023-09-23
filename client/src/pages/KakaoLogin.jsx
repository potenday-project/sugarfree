import { useEffect, useState } from "react";
import "../../src/styles/style.css";

export default function KakaoLogin() {
  /*카카오로그인시작*/
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const { Kakao } = window;
  const initKakao = async () => {
    const jsKey = "인증키"; //"eeef591ad8f199dcc87122988f2885";
    if (Kakao && !Kakao.isInitialized()) {
      await Kakao.init(jsKey);
      console.log(`kakao 초기화 ${Kakao.isInitialized()}`);
    }
  };
  const kakaoLogin = async () => {
    await Kakao.Auth.login({
      success(res) {
        console.log(res);
        Kakao.Auth.setAccessToken(res.access_token);
        console.log("카카오 로그인 성공");

        Kakao.API.request({
          url: "/v2/user/me",
          success(res) {
            console.log("카카오 인가 요청 성공");
            setIsLogin(true);
            const kakaoAccount = res.kakao_account;
            localStorage.setItem("email", kakaoAccount.email);
            localStorage.setItem(
              "profileImg",
              kakaoAccount.profile.profile_image_url
            );
            localStorage.setItem("nickname", kakaoAccount.profile.nickname);
          },
          fail(error) {
            console.log(error);
          },
        });
      },
      fail(error) {
        console.log(error);
      },
    });
  };
  /* 버튼 구현 할지 여부 */
  const kakaoLogout = () => {
    Kakao.Auth.logout((res) => {
      //logout시, localstrage 데이터 삭제
      console.log(Kakao.Auth.getAccessToken());
      console.log(res);
      localStorage.removeItem("email");
      localStorage.removeItem("profileImg");
      localStorage.removeItem("nickname");
      setUser(null);
    });
  };

  useEffect(() => {
    initKakao();
    Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false);
  }, []);

  useEffect(() => {
    console.log(isLogin);
    if (isLogin) {
      setUser({
        email: localStorage.getItem("email"),
        profileImg: localStorage.getItem("profileImg"),
        nickname: localStorage.getItem("nickname"),
      });
    }
  }, [isLogin]);

  return (
    <div className="iphone-mini">
      <div className="div">
        <div>
          {user ? (
            <>
              <button onClick={kakaoLogout}>로그아웃</button>
              <h2>카카오 로그인 성공!</h2>
              <h3>카카오 프로필 사진</h3>
              <img src={user.profileImg} alt="" />
              <h3>카카오 닉네임</h3>
              <h4>{user.nickname}</h4>
              <h3>카카오 이메일</h3>
              <h4>{user.email}</h4>
            </>
          ) : (
            <div>
              <button onClick={kakaoLogin}>카카오 로그인</button>
            </div>
          )}
        </div>
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
