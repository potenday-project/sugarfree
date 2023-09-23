import MapPage from "./pages/MapPage";
import styled from "styled-components";
import MyPage from "./pages/MyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LogoPage from "./pages/LogoPage";
import DetailPage from "./pages/DetailPage";
import ReviewPage from "./pages/ReviewPage";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
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
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
