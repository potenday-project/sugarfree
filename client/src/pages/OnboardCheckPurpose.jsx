import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// :root 내용을 직접 정의합니다.

// 스타일드 컴포넌트를 사용하여 스타일을 정의합니다.
const ElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  height: 812px;
  position: relative;
  width: 375px;
`;

const TextWrapper = styled.div`
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 24px;
  font-weight: 700;
  left: 20px;
  letter-spacing: -0.24px;
  line-height: 33.6px;
  position: absolute;
  top: 284px;
`;

const Overlap = styled.div`
  background-color: ${(props) => (props.isselected ? "#2ab7c0" : "")};
  color: ${(props) => (props.isselected ? "white" : "black")};
  cursor: pointer;
  &:hover {
    color: white;
    background-color: rgba(42, 183, 192, 1);
  }
  border-radius: 8px;
  height: 50px;
  left: 20px;
  position: absolute;
  top: 430px;
  width: 335px;
`;

const Paragraph = styled.p`
  background-color: ${(props) => (props.isselected ? "#2ab7c0" : "")};
  color: ${(props) => (props.isselected ? "white" : "black")};
  cursor: pointer;
  &:hover {
    color: white;
    background-color: rgba(42, 183, 192, 1);
  }
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 21px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 16px;
`;

const Span = styled.span`
  font-weight: 700;
`;

const TextWrapper2 = styled.span``;

const OverlapGroup = styled.div`
  background-color: ${(props) => (props.isselected ? "#2ab7c0" : "")};
  color: ${(props) => (props.isselected ? "white" : "black")};
  cursor: pointer;
  &:hover {
    color: white;
    background-color: rgba(42, 183, 192, 1);
  }
  border-radius: 8px;
  height: 50px;
  left: 20px;
  position: absolute;
  top: 488px;
  width: 335px;
`;

const DivWrapper = styled.div`
  background-color: ${(props) => (props.isselected ? "#2ab7c0" : "")};
  color: ${(props) => (props.isselected ? "white" : "black")};
  cursor: pointer;
  &:hover {
    color: white;
    background-color: rgba(42, 183, 192, 1);
  }
  border-radius: 8px;
  height: 50px;
  left: 20px;
  position: absolute;
  top: 546px;
  width: 335px;
`;

const OverlapGroup2 = styled.div`
  background-color: ${(props) => (props.isselected ? "#2ab7c0" : "")};
  color: ${(props) => (props.isselected ? "white" : "black")};
  cursor: pointer;
  &:hover {
    color: white;
    background-color: rgba(42, 183, 192, 1);
  }
  border-radius: 8px;
  height: 50px;
  left: 20px;
  position: absolute;
  top: 604px;
  width: 335px;
`;

const Div2 = styled.p`
  font-size: 14px;
  font-weight: 400;
  left: 21px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 16px;
`;

const TextWrapper3 = styled.span`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.14px;
`;

const TextWrapper4 = styled.span`
  font-size: 12px;
  font-weight: 700;
`;

const TextWrapper5 = styled.div`
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
  font-size: 14px;
  font-weight: 400;
  left: 20px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 63px;
`;

const TextWrapper7 = styled.p`
  font-size: 14px;
  font-weight: 400;
  left: 20px;
  letter-spacing: -0.14px;
  line-height: normal;
  position: absolute;
  top: 360px;
`;

const Rectangle = styled.div`
  background-color: #2ab7c0;
  border-radius: 100px;
  height: 50px;
  left: 20px;
  position: absolute;
  top: 713px;
  width: 335px;
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
  background-color: var(--variable-collection-MAIN-turquoise);
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

const TextWrapper8 = styled.div`
  z-index: 5;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.15px;
  line-height: normal;
  position: fixed;
  text-align: center;
  top: 785px;
  white-space: nowrap;
  cursor: pointer;
  left: 690px;
  &:hover {
    color: white;
  }
`;

export default function OnboardingCheckPurpose() {
  const navigate = useNavigate();

  const [idx, setIdx] = useState(-1);

  const onClickHandler = (index) => {
    setIdx(index);
  };

  return (
    <>
      <ElementWrapper>
        <Container>
          <TextWrapper>
            무엇을 위해
            <br />
            방문하게 되었나요?
          </TextWrapper>
          <Overlap
            onClick={() => onClickHandler(0)}
            isselected={idx === 0 ? true : false}
          >
            <Paragraph>
              <Span>당뇨</Span>
              <TextWrapper2>로 인해 식단 관리를 하고 있어요</TextWrapper2>
            </Paragraph>
          </Overlap>
          <OverlapGroup
            onClick={() => onClickHandler(1)}
            isselected={idx === 1 ? true : false}
          >
            <Paragraph>
              <Span>다이어트</Span>
              <TextWrapper2> 및 체형 관리를 하고 싶어요</TextWrapper2>
            </Paragraph>
          </OverlapGroup>
          <DivWrapper
            onClick={() => onClickHandler(2)}
            isselected={idx === 2 ? true : false}
          >
            <Paragraph>
              <Span>임신성 당뇨</Span>
              <TextWrapper2>를 예방, 관리하고 싶어요</TextWrapper2>
            </Paragraph>
          </DivWrapper>
          <OverlapGroup2
            onClick={() => onClickHandler(3)}
            isselected={idx === 3 ? true : false}
          >
            <Div2>
              <TextWrapper3>뚜렷한 목표는 없지만 </TextWrapper3>
              <TextWrapper4>건강한 식습관</TextWrapper4>
              <TextWrapper3>을 만들고 싶어요</TextWrapper3>
            </Div2>
          </OverlapGroup2>
          <TextWrapper5>SKIP</TextWrapper5>
          <TextWrapper6>이전</TextWrapper6>
          <TextWrapper7>
            목표로 하고 있는 항목을 하나 선택해주세요.
          </TextWrapper7>
          <Group>
            <Ellipse />
            <Ellipse2 />
            <Ellipse3 />
            <Ellipse4 />
          </Group>
          <Rectangle>
            {idx !== -1 ? (
              <TextWrapper8 onClick={() => navigate("/tags")}>
                다음
              </TextWrapper8>
            ) : (
              <></>
            )}
          </Rectangle>
        </Container>
      </ElementWrapper>
    </>
  );
}
