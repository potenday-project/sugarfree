import { useSelector } from "react-redux";
import styled from "styled-components";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const constTags = [
  "#저당비기너",
  "#헬스장 지박령",
  "#당뇨위험군",
  "#당뇨n년차",
  "#프로다이어터",
  "#키토식 고수",
  "#예비엄마",
  "#예비아빠",
];

export const TagsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 260px;
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

export const DESC = styled.p`
  font-size: 14px;
  color: gray;
  margin-bottom: 18px;
`;

export const KeyWordP = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-top: 44px;
  margin-bottom: 6px;
`;

export const KeyWordPExplain = styled.p`
  font-size: 14px;
  color: darkgray;
  margin-bottom: 15px;
`;

export const Xbutton = styled.span`
  cursor: pointer;
  color: darkgray;
  margin-left: 5px;
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

export const NickNameDiv = styled.div`
  display: flex;
`;

export const TagContainer = styled.div`
  width: 116px;
  height: 30px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  border-radius: 8px;

  background-color: ${(props) => (props.isSelected ? "#2ab7c0" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  &:hover {
    background-color: #2ab7c0;
    color: white;
  }
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

export const HR = styled.hr`
  width: 335px;
  margin-bottom: 24px;
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

export default function MyPage() {
  const [goal, setGoal] = useState("");
  const [tags, setTags] = useState([]);
  const [edit, setEdit] = useState(false);

  const handleChange = (event) => {
    setGoal(event.target.value);
  };

  const imgClickHandler = () => {
    setEdit(!edit);
  };

  const userInfo = useSelector((state) => state.user);

  const onClickHandler = (elem, bool) => {
    if (bool) {
      setTags(tags.filter((el) => el !== elem));
    } else {
      if (tags.includes(elem)) {
        return;
      }
      setTags([...tags, elem]);
    }
  };

  const onClickHandler2 = (elem) => {
    if (tags.includes(elem)) {
      return;
    }
    setTags([...tags, elem]);
  };

  return (
    <>
      <div>
        <MyPageP>마이페이지</MyPageP>
        <div>
          <UserImg src={userInfo.imgUrl} alt="유저 이미지" />
        </div>
        <NickNameDiv>
          <NickName>{userInfo.nickname}</NickName>
          {!edit && (
            <img
              src="/images/edit.svg"
              onClick={imgClickHandler}
              alt="연필이미지"
            />
          )}
          {edit && (
            <>
              <NickNameFlex>
                <NickNameChange>
                  <UserName>당짠당짠</UserName>
                  <Double>중복확인</Double>
                </NickNameChange>
              </NickNameFlex>
              <Change onClick={() => setEdit(false)}>변경</Change>
            </>
          )}
        </NickNameDiv>
      </div>
      <HR />

      <div>
        <TagMan>태그 관리</TagMan>
        <DESC>목표로 하고 있는 항목이에요.</DESC>
        <Box sx={{ width: 335, fontSize: 12 }}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              style={{ fontSize: "12px" }}
            >
              여러분들의 목표
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={goal}
              label="여러분들의 목표"
              onChange={handleChange}
              style={{ fontSize: "12px" }}
            >
              <MenuItem value={10} style={{ fontSize: "12px" }}>
                당뇨로 인해 식단 관리를 하고 있어요
              </MenuItem>
              <MenuItem value={20} style={{ fontSize: "12px" }}>
                다이어트 및 체형 관리를 하고 싶어요
              </MenuItem>
              <MenuItem value={30} style={{ fontSize: "12px" }}>
                임신성 당뇨를 예방, 관리하고 싶어요
              </MenuItem>
              <MenuItem value={40} style={{ fontSize: "12px" }}>
                뚜렷한 목표는 없지만 건강한 식습관을 만들고 싶어요
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div>
        <KeyWordP>키워드 관리</KeyWordP>
        <KeyWordPExplain>
          나를 가장 잘 나타낼 수 있는 키워드예요.
        </KeyWordPExplain>
        <TagsDiv>
          {constTags.map((el) => {
            return (
              <TagContainer key={el} isSelected={tags.includes(el)}>
                <p onClick={() => onClickHandler2(el)}>{el}</p>
                <Xbutton
                  onClick={() => onClickHandler(el, tags.includes(el))}
                  isSelected={tags.includes(el)}
                >
                  {tags.includes(el) ? (
                    <img src="/images/tag_delete.svg" />
                  ) : (
                    <img src="/images/tag_plus.svg" />
                  )}
                </Xbutton>
              </TagContainer>
            );
          })}
        </TagsDiv>
      </div>
    </>
  );
}
