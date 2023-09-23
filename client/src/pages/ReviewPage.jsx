import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-left: 80px;
  margin-bottom: 28px;
`;

export const TopDiv = styled.div`
  display: flex;
`;

export const End = styled.p`
  margin-left: 160px;
  font-size: 15px;
  color: lightgray;
  font-weight: bold;
`;

export const Img = styled.img`
  width: 78px;
  margin-right: 16px;
  height: 78px;
  margin-left: 20px;
`;

export const DESC = styled.div`
  display: flex;
`;

export const Name = styled.div`
  font-size: 14px;
  margin-top: 4px;
  color: darkgray;
`;

export const Text = styled.textarea`
  width: 335px;
  height: 196px;
  margin-top: 32px;
  resize: none;
`;

export const TextContainer = styled.div`
  position: relative;
`;

export const TextCount = styled.p`
  font-size: 12px;
  color: darkgray;
  position: absolute;
  top: 61%;
  right: 44%;
`;

export const Colored = styled.span`
  color: #2ab7c0;
`;

const InputButton = styled.input`
  display: none;
`;

const Label = styled.label`
  cursor: pointer;
`;
const ImgContainer = styled.div`
  margin-top: 10px;
  width: 91px;
  height: 91px;
  position: relative;
  border: 1px solid gray;
`;

const ImgTaken = styled.img`
  width: 91px;
  height: 91px;
`;

const Camera = styled.img`
  position: absolute;
  top: 40%;
  left: 40%;
  z-index: 2;
  width: 20px;
  height: 20px;
`;

const ImgAndImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

const EndSpan = styled.span`
  color: #2ab7c0;
  cursor: pointer;
`;

const BackContainer = styled.div`
  display: flex;
  align-items: start;
  width: 375px;
`;

const LeftArrow = styled.img`
  cursor: pointer;
`;

const Ximg = styled.img`
  position: absolute;
  z-index: 15;
  top: 9%;
  right: 5%;
  cursor: pointer;
`;

export default function ReviewPage() {
  const [value, setValue] = useState(2);
  const [item, setItem] = useState({});
  const location = useLocation();
  const [number, setNumber] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [img, setImg] = useState("");
  const [isImg, setIsImg] = useState(false);

  const navigate = useNavigate();

  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  const xHandler = (event) => {
    const label = event.target.parentNode;
    const originalHtmlFor = label.htmlFor;

    // htmlFor 속성 잠시 비우기
    label.htmlFor = "";

    // 이미지 초기화
    imgRef2.current.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    imgRef.current.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

    // htmlFor 속성 원래대로 복구 (딜레이 추가)
    setTimeout(() => {
      label.htmlFor = originalHtmlFor;
    }, 0);
    setIsImg(false);
  };

  const saveImgFile = async () => {
    const file = imgRef.current.files[0];
    try {
      const formData = new FormData();
      formData.append("multipartFile", file);
      setImg(URL.createObjectURL(file));
      imgRef2.current.src = URL.createObjectURL(file);
      // @todo : axios post
      alert("수정완료되었습니다!");
      imgRef3.current.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      setIsImg(true);
    } catch {
      alert("에러가 발생하였습니다. 다시 시도해주세요.");
    }
  };

  const textHandler = (e) => {
    setNumber(e.target.value.length);
  };

  useEffect(() => {
    if (number > 0 && value > 0 && img) setIsDone(true);
  }, [number, value, img]);

  useEffect(() => {
    setItem(location.state);
  }, []);

  return (
    <>
      <BackContainer>
        <LeftArrow
          onClick={() => navigate("/detail", { state: item })}
          src="/images/back.svg"
        />
      </BackContainer>
      <div>
        <TopDiv>
          <Title>리뷰 작성</Title>
          <End>{isDone ? <EndSpan>완료</EndSpan> : <span>완료</span>}</End>
        </TopDiv>
        <DESC>
          <Img src={item.img} alt="아이템 이미지" />
          <div>
            <Name>{item.name}</Name>
            <Name>스타벅스 울산점</Name>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </div>
        </DESC>
        <div>
          <Text
            onChange={textHandler}
            placeholder="해당 메뉴에 대한 리뷰를 남겨주세요 :)"
          ></Text>
          <TextCount>{number}/300</TextCount>
        </div>
      </div>
      <ImgAndImgContainer>
        <ImgContainer>
          <Label htmlFor="fileInput">
            <ImgTaken
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              ref={imgRef2}
              alt=""
            />
            {isImg && <Ximg onClick={xHandler} src="/images/xsign.svg" />}
            {!isImg && <Camera ref={imgRef3} src="/images/Camera.svg" />}
          </Label>
          <InputButton
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={saveImgFile}
            ref={imgRef}
          />
        </ImgContainer>
      </ImgAndImgContainer>
    </>
  );
}
