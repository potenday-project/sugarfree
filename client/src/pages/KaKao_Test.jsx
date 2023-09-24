import { useEffect, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
// :root 내용을 직접 정의합니다.
const GlobalStyles = createGlobalStyle`
  :root {
    --drop-shadow-1-down: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
    --drop-shadow-2-up: 0px -4px 20px 0px rgba(0, 0, 0, 0.12);
    --variable-collection: rgba(255, 0, 0, 1);
    --variable-collection-alert-red: rgba(255, 94, 94, 1);
    --variable-collection-ALT-violet: rgba(139, 70, 181, 1);
    --variable-collection-black: rgba(37, 37, 37, 1);
    --variable-collection-dark-gray: rgba(138, 138, 138, 1);
    --variable-collection-light-gray: rgba(214, 214, 214, 1);
    --variable-collection-main-blue: rgba(87, 148, 238, 1);
    --variable-collection-MAIN-turquoise: rgba(42, 183, 192, 1);
    --variable-collection-pale-gray: rgba(245, 245, 245, 1);
    --variable-collection-SUB-light: rgba(140, 216, 221, 1);
    --variable-collection-sub-light-blue: rgba(139, 192, 255, 1);
    --variable-collection-SUB-pale: rgba(232, 248, 249, 1);
    --variable-collection-sub-pale-blue: rgba(220, 236, 255, 1);
    --variable-collection-SUB-yellow: rgba(255, 211, 97, 1);
  }
`;

// 스타일드 컴포넌트를 사용하여 스타일을 정의합니다.
const ElementWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  background-color: #ffffff;
  height: 812px;
  position: relative;
  width: 375px;
`;

const Img = styled.img`
  height: 29px;
  left: 21px;
  position: absolute;
  top: 293px;
  width: 116px;
`;

const Vector = styled.img`
  height: 50px;
  left: 20px;
  position: absolute;
  top: 653px;
  width: 335px;
`;

const OverlapGroup = styled.div`
  background-image: url(/images/kakaologin.png);
  background-size: 100% 100%;
  height: 50px;
  left: 20px;
  position: absolute;
  top: 713px;
  width: 335px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  color: var(--variable-collection-black);
  font-family: "Pretendard-Medium", Helvetica;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`;

const TextWrapper2 = styled.div`
  color: #ffffff;
  font-family: "Pretendard-Medium", Helvetica;
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
`;

const TextWrapper3 = styled.div`
  color: var(--variable-collection-MAIN-turquoise);
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.32px;
  line-height: 44.8px;
  position: absolute;
  top: 284px;
  left: 20px;
`;

export default function Element() {
  /*카카오로그인시작*/
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const { Kakao } = window;

  const navigate = useNavigate();

  const initKakao = async () => {
    const jsKey = "e7542f591ad8f199dcc87122988f2885";
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
            navigate("/onboard");
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
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <ElementWrapper>
        <Container>
          <TextWrapper3>환영합니다!</TextWrapper3>
          <Vector alt="Vector" src="/images/naverlogin.png" />
          <OverlapGroup onClick={kakaoLogin}>
            <TextWrapper>카카오 로그인</TextWrapper>
          </OverlapGroup>
          <TextWrapper2>네이버 로그인</TextWrapper2>
        </Container>
      </ElementWrapper>
    </ThemeProvider>
  );
}
