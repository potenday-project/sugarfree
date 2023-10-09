import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
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

const ElementWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  background-color: #ffffff;
  height: 100%;
`;

const TextWrapper = styled.div`
  color: #2ab7c0;
  position: absolute;
  top: 285px;
  left: 20px;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.24px;
`;

const Rectangle = styled.div`
  background-color: var(--variable-collection-MAIN-turquoise);
  border-radius: 100px;
  height: 50px;
  width: 335px;
  position: absolute;
  bottom: 49px;
  cursor: pointer;
  bottom: 49px;
  left: 20px;
`;

const TextWrapper2 = styled.div`
  color: #ffffff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  position: absolute;
  text-align: center;
  top: 16px;
  left: 155px;
`;

export default function OnboardName() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <ElementWrapper>
        <Container>
          <TextWrapper>
            사용자님의
            <br />
            이름을 알고 싶어요
          </TextWrapper>
          <Rectangle onClick={() => navigate("/make")}>
            <TextWrapper2 onClick={() => navigate("/make")}> 다음</TextWrapper2>
          </Rectangle>
        </Container>
      </ElementWrapper>
    </ThemeProvider>
  );
}
