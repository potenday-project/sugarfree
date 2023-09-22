import MapPage from "./pages/MapPage";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LogoPage from "./pages/LogoPage";
import DetailPage from "./pages/DetailPage";

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
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
