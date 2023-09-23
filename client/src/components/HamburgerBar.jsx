import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const HamburgerBarDiv = styled.div`
  background-color: white;
  position: absolute;
  top: 0%;
  height: 100vh;
  width: 257px;
  z-index: 20;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ExitP = styled.p`
  color: gray;
  font-size: 12px;
  cursor: pointer;
  margin-top: 534px;
  &:hover {
    color: #2ab7c0;
  }
`;

export const Img = styled.img`
  margin-top: 70px;
  margin-bottom: 7px;
`;

export const Upper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NickName = styled.p`
  font-size: 14px;
  margin-bottom: 9px;
`;

export const TagsDiv = styled.div`
  display: flex;
  font-size: 12px;
`;

export const Tags = styled.p`
  margin-right: 6px;
  color: gray;
`;

export const Home = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #2ab7c0;
`;

export const MyPage = styled(Home)`
  margin-top: 20px;
  color: gray;
  cursor: pointer;
  &:hover {
    color: #2ab7c0;
  }
`;

export const Personal = styled.p`
  font-size: 14px;
  color: gray;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: #2ab7c0;
  }
`;

export const ExitP2 = styled.p`
  margin-right: 28px;
  color: gray;
  font-size: 12px;
  margin-top: 534px;
  cursor: pointer;
  &:hover {
    color: #2ab7c0;
  }
`;

export const ExitDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Contents = styled.div`
  margin-left: 24px;
  margin-top: 24px;
`;

export default function HamburgerBar({ setHam }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const onClickHandler = () => {
    setHam(false);
  };

  useEffect(() => {
    const asyncFunction = async () => {
      const response = await axios.get("/dummy/dummy5.json");
      setUser(response.data);
    };
    asyncFunction();
  }, []);

  return (
    <div>
      <HamburgerBarDiv>
        <Upper>
          <div>
            <Img src={user.imgUrl} alt="userPic" />
          </div>
          <NickName>{user.nickname}</NickName>
          <TagsDiv>
            {user.tags &&
              user.tags.map((el, idx) => {
                return (
                  <div key={idx}>
                    <Tags>#{el}</Tags>
                  </div>
                );
              })}
          </TagsDiv>
        </Upper>
        <hr />
        <Contents>
          <Home>검색홈</Home>
          <MyPage onClick={() => navigate("/mypage")}>마이페이지</MyPage>
          <Personal>개인정보 처리방침</Personal>
          <Personal>설정</Personal>
        </Contents>
        <ExitDiv>
          <ExitP>로그아웃</ExitP>
          <ExitP2 onClick={onClickHandler}>닫기</ExitP2>
        </ExitDiv>
      </HamburgerBarDiv>
    </div>
  );
}
HamburgerBar.propTypes = {
  setHam: PropTypes.func.isRequired,
};
