import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";
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
const constTags = [
  "저당비기너",
  "헬스장 지박령",
  "당뇨위험군",
  "당뇨n년차",
  "프로다이어터",
  "키토식 고수",
  "예비엄마",
  "예비아빠",
];

export const TagsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  top: 430px;
  left: 20px;
  position: absolute;
  width: 310px;
`;

export const MyPageP = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 23px;
`;

export const UserImg = styled.img`
  width: 63px;
  height: 63px;
  margin-bottom: 18px;
`;

export const NickName = styled.p`
  font-size: 15px;
  margin-top: 12px;
`;

export const TagMan = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const KeyWordP = styled.p`
  font-size: 24px;
  top: 285px;
  left: 20px;
  position: absolute;
  font-weight: bold;
`;

export const KeyWordPExplain = styled.p`
  font-size: 14px;
  color: darkgray;
  top: 361px;
  left: 20px;
  position: absolute;
  margin-bottom: 15px;
`;

export const NickNameDiv = styled.div`
  display: flex;
`;

export const TagContainer = styled.div`
  width: 102px;
  height: 31px;
  display: flex;
  font-size: 14px;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  border-radius: 8px;
  background-color: #e8f8f9;
  color: black;

  &:hover {
    background-color: #2ab7c0;
    color: white;
  }
`;

export const TagContainer2 = styled(TagContainer)`
  background-color: #2ab7c0;
  color: white;
`;

export const Double = styled.div`
  background-color: darkgray;
  width: 55px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 5%;
  right: 3%;
  border-radius: 6px;
  &:hover {
    background-color: #2ab7c0;
  }
`;

export const Change = styled.div`
  width: 51px;
  height: 33px;
  background-color: darkgray;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-left: 12px;
  cursor: pointer;
  &:hover {
    background-color: #2ab7c0;
  }
`;

export const NickNameChange = styled.div`
  width: 188px;
  height: 33px;
  position: relative;
  border: 1px solid gray;
  border-radius: 6px;
  display: flex;
`;

export const UserName = styled.p`
  position: absolute;
  top: 25%;
  left: 6%;
`;

export const NickNameFlex = styled.div`
  display: flex;
`;

export const RelaDiv = styled.div`
  position: relative;
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  position: absolute;
  top: 1%;
  left: 1%;
`;

export const WriteImg = styled.img`
  cursor: pointer;
`;

const ElementWrapper = styled.div`
  background-color: #ffffff;
  height: 812px;
  width: 100%;
`;

const TextWrapper = styled.div`
  color: var(--variable-collection-MAIN-turquoise);
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 32px;
  font-weight: 700;
  left: 20px;
  letter-spacing: -0.32px;
  line-height: 44.8px;
  position: absolute;
  top: 285px;
`;

const Rectangle = styled.div`
  background-color: var(--variable-collection-MAIN-turquoise);
  border-radius: 100px;
  height: 50px;
  left: 20px;
  position: absolute;
  top: 713px;
  width: 335px;
  cursor: pointer;
`;
export const Rectangle2 = styled(Rectangle)`
  background-color: #d6d6d6;
`;

const TextWrapper2 = styled.div`
  z-index: 5;
  color: white;
  cursor: pointer;
  font-family: "Pretendard-Bold", Helvetica;
  font-size: 15px;
  font-weight: 700;
  left: 174px;
  letter-spacing: -0.15px;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 728px;
  white-space: nowrap;
`;

export default function OnboardTags() {
  const navigate = useNavigate();
  const [tags, setTags] = useState("");
  const [time, setTime] = useState(true);

  const onClickHandler = (elem) => {
    setTags(elem);
  };

  return (
    <>
      {time ? (
        <ThemeProvider theme={{}}>
          <GlobalStyles />
          <ElementWrapper>
            <TextWrapper>
              사용자님을
              <br />
              한마디로 표현한다면?
            </TextWrapper>
            <Rectangle onClick={() => setTime(false)} />
            <TextWrapper2 onClick={() => setTime(false)}>다음</TextWrapper2>
          </ElementWrapper>
        </ThemeProvider>
      ) : (
        <div>
          <ThemeProvider theme={{}}>
            <GlobalStyles />
            <ElementWrapper>
              <KeyWordP>
                00님을
                <br /> 한마디로 표현한다면?
              </KeyWordP>
              <KeyWordPExplain>
                00님을 가장 나타낼 수 있는 키워드를 하나 골라주세요!
                <br /> 추후 마이페이지에서 수정할 수 있어요
              </KeyWordPExplain>
              <TagsDiv>
                {constTags.map((el) => {
                  return tags === el ? (
                    <TagContainer2 key={el} onClick={() => onClickHandler(el)}>
                      <p>{el}</p>
                    </TagContainer2>
                  ) : (
                    <TagContainer key={el} onClick={() => onClickHandler(el)}>
                      <p>{el}</p>
                    </TagContainer>
                  );
                })}
              </TagsDiv>
              {tags.length > 0 ? (
                <>
                  <Rectangle onClick={() => navigate("/confirm")} />
                  <TextWrapper2 onClick={() => navigate("/confirm")}>
                    다음
                  </TextWrapper2>
                </>
              ) : (
                <>
                  <Rectangle2 />
                  <TextWrapper2>다음</TextWrapper2>
                </>
              )}
            </ElementWrapper>
          </ThemeProvider>
        </div>
      )}
    </>
  );
}
