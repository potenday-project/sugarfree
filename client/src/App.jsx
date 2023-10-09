import MapPage from "./pages/MapPage";
import styled from "styled-components";
import MyPage from "./pages/MyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LogoPage from "./pages/LogoPage";
import DetailPage from "./pages/DetailPage";
import ReviewPage from "./pages/ReviewPage";
import OnboardMakeName from "./pages/OnboardMakeName";
import OnboardName from "./pages/OnboardName";
import OnboardCheckPurpose from "./pages/OnboardCheckPurpose";
import KakaoLoginButton from "./components/KakaoLoginButton";
import OnboardTags from "./pages/OnboardTags";
import ConfirmPage from "./pages/ConfirmPage";

const AppContainer = styled.div`
  position: relative;
  height: 812px;
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route exact path="/" element={<LogoPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/write" element={<ReviewPage />} />
          <Route path="/login/kakao" element={<KakaoLoginButton />} />
          <Route path="/make" element={<OnboardMakeName />} />
          <Route path="/name" element={<OnboardName />} />
          <Route path="/check" element={<OnboardCheckPurpose />} />
          <Route path="/tags" element={<OnboardTags />} />
          <Route path="/confirm" element={<ConfirmPage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
