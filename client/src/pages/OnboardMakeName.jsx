import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
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
  }`;

// 스타일 컴포넌트 정의
const ElementWrapper = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Div = styled.div`
  background-color: #ffffff;
  height: 812px;
  position: relative;
  width: 375px;
`;

const TextWrapper = styled.div`
  color: var(--variable-collection-black);
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 24px;
  font-weight: 700;
  left: 20px;
  letter-spacing: -0.24px;
  line-height: 33.6px;
  position: absolute;
  top: 284px;
`;

const OverlapGroup = styled.div`
  background-color: var(--variable-collection-pale-gray);
  border: 0.5px solid;
  border-color: var(--variable-collection-light-gray);
  border-radius: 8px;
  height: 50px;
  left: 20px;
  position: absolute;
  top: 430px;
  width: 335px;
`;

const TextWrapper2 = styled.input`
  color: var(--variable-collection-black);
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 20px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 14px;
`;

const Overlap = styled.div`
  background-color: var(--variable-collection-MAIN-turquoise);
  border-radius: 4px;
  height: 27px;
  left: 258px;
  position: absolute;
  top: 11px;
  width: 64px;
`;

const TextWrapper3 = styled.div`
  cursor: pointer;
  color: #ffffff;
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 8px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 4px;
`;

const DivWrapper = styled.div`
  background-color: var(--variable-collection-light-gray);
  border-radius: 100px;
  height: 50px;
  left: 20px;
  position: absolute;
  top: 713px;
  width: 335px;
`;
const DivWrapper2 = styled.div`
  cursor: pointer;
  background-color: var(--variable-collection-MAIN-turquoise);
  border-radius: 100px;
  height: 50px;
  left: 20px;
  position: absolute;
  top: 713px;
  width: 335px;
`;

const TextWrapper4 = styled.div`
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 14px;
  font-weight: 700;
  left: 155px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 16px;
`;

const TextWrapper44 = styled(TextWrapper4)`
  cursor: pointer;
  background-color: var(--variable-collection-MAIN-turquoise);
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 14px;
  font-weight: 700;
  left: 155px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 16px;
`;

const Group = styled.div`
  height: 4px;
  left: 170px;
  position: absolute;
  top: 70px;
  width: 34px;
`;

const Ellipse = styled.div`
  background-color: var(--variable-collection-sub-pale-blue);
  border-radius: 2px;
  height: 4px;
  left: 20px;
  position: absolute;
  top: 0;
  width: 4px;
`;

const Ellipse2 = styled.div`
  background-color: var(--variable-collection-sub-pale-blue);
  border-radius: 2px;
  height: 4px;
  left: 30px;
  position: absolute;
  top: 0;
  width: 4px;
`;

const Ellipse3 = styled.div`
  background-color: var(--variable-collection-sub-pale-blue);
  border-radius: 2px;
  height: 4px;
  left: 10px;
  position: absolute;
  top: 0;
  width: 4px;
`;

const Ellipse4 = styled.div`
  background-color: var(--variable-collection-MAIN-turquoise);
  border-radius: 2px;
  height: 4px;
  left: 0;
  position: absolute;
  top: 0;
  width: 4px;
`;

const TextWrapper5 = styled.div`
  cursor: pointer;
  color: var(--variable-collection-dark-gray);
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 326px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  text-align: right;
  top: 63px;
`;

const TextWrapper6 = styled.div`
  cursor: pointer;
  color: var(--variable-collection-dark-gray);
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 20px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 63px;
`;

const FlexContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 38px;
  left: 20px;
  position: absolute;
  top: 360px;
  width: 206px;
`;

const Text = styled.p`
  align-self: stretch;
  color: var(--variable-collection-dark-gray);
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.14px;
  line-height: normal;
  position: relative;
`;

const Span = styled.span`
  color: #8a8a8a;
  font-family: "Pretendard-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.14px;
`;

const Span2 = styled.span`
  color: var(--variable-collection-MAIN-turquoise);
`;

// React 컴포넌트 정의
export default function OnboardingMakeName() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <ElementWrapper>
        <Div>
          <TextWrapper>
            사용자님의
            <br />
            이름을 알고 싶어요
          </TextWrapper>
          <OverlapGroup>
            <TextWrapper2
              onChange={onChangeHandler}
              placeholder="단짠단짠"
              value={name}
            />
            <Overlap>
              <TextWrapper3>중복확인</TextWrapper3>
            </Overlap>
          </OverlapGroup>
          {name.length > 0 ? (
            <DivWrapper2>
              <TextWrapper44 onClick={() => navigate("/check")}>
                다음
              </TextWrapper44>
            </DivWrapper2>
          ) : (
            <DivWrapper>
              <TextWrapper4>다음 </TextWrapper4>
            </DivWrapper>
          )}
          <Group>
            <Ellipse />
            <Ellipse2 />
            <Ellipse3 />
            <Ellipse4 />
          </Group>

          <TextWrapper5 onClick={() => navigate("/map")}>SKIP</TextWrapper5>
          <TextWrapper6 onClick={() => navigate("/name")}>이전</TextWrapper6>
          <FlexContainer>
            <Text>
              <Span>
                앱에서 사용할 닉네임을 입력해주세요.
                <br />
              </Span>
            </Text>
            <Text>
              <Span>닉네임의 길이는 최대 8글자입니다.</Span>
            </Text>
          </FlexContainer>
        </Div>
      </ElementWrapper>
    </ThemeProvider>
  );
}
