import MapPage from "./pages/MapPage";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <MapPage />
    </AppContainer>
  );
}

export default App;
