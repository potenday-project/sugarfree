import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
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
  top: 66%;
  right: 35%;
`;

export const Colored = styled.span`
  color: #2ab7c0;
`;

export const InputButton = styled.input`
  color: red;
`;

export default function ReviewPage() {
  const [value, setValue] = useState(2);
  const [item, setItem] = useState({});
  const location = useLocation();
  const [number, setNumber] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [img, setImg] = useState("");

  const imgRef = useRef(null);
  const imgRef2 = useRef(null);

  const saveImgFile = async () => {
    const file = imgRef.current.files[0];
    try {
      const formData = new FormData();
      formData.append("multipartFile", file);
      setImg(URL.createObjectURL(file));
      // @todo : axios post
      alert("수정완료되었습니다!");
    } catch {
      alert("에러가 발생하였습니다. 다시 시도해주세요.");
    }
  };

  const textHandler = (e) => {
    console.log(e.target);
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
      <div>
        <TopDiv>
          <Title>리뷰 작성</Title>
          <End>{isDone ? <span>완료</span> : <span>완료</span>}</End>
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
      <InputButton
        type="file"
        accept="image/*"
        onChange={saveImgFile}
        ref={imgRef}
      />
      <img src="/images/camera.svg" ref={imgRef2} />
    </>
  );
}
