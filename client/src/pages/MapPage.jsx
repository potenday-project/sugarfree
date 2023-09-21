import { useRef, useState } from "react";
import MapComponent from "../components/MapComponent";
import Rating from "@mui/material/Rating";
import styled from "styled-components";

const MenuDiv = styled.div`
  font-family: var(--nanum);
`;

const InputStyle = styled.input`
  width: 250px;
  height: 42px;
  border-radius: 5px;
  position: absolute;
  left: 3%;
  z-index: 5;
`;

const Wrapper = styled.div`
  position: relative;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 0%;
  z-index: 5;
  background-color: white;
  width: 100%;
  height: 251px;
  text-align: center;
`;

const BottomBarClick = styled.p`
  cursor: pointer;
  color: red;
`;

const BottomBarSpan1 = styled.span`
  margin-right: 4rem;
`;

const BottomBarSpan2 = styled.span`
  margin-left: 4rem;
  cursor: pointer;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9;
  position: absolute;
`;

const ModalWrapper = styled.div`
  width: 257px;
  height: 223px;
  position: absolute;
  top: 20%;
  right: 39%;
  background-color: white;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 11px;
`;

const ModalStandard = styled.p`
  margin-top: 2rem;
`;

const ModalP = styled.p`
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    color: #2ab7c0;
  }
`;

const ModalP2 = styled.p`
  text-align: right;
  width: 100%;
  margin-right: 1rem;
  cursor: pointer;
`;

export default function MapPage() {
  const [drop, setDrop] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const inputRef = useRef(null);
  const [inputContent, SetInputContent] = useState(" ");

  const onKeyUpHandler = (e) => {
    if (e.key === "Enter") {
      SetInputContent(inputRef.current.value);
    }
  };

  const onClickHandler = () => {
    setDrop(false);
  };
  const onClickHandlerSpan = () => {
    setIsModal(true);
  };

  const modalWrapperHandler = (e) => {
    e.stopPropagation();
  };

  const modalHandler = () => {
    setIsModal(false);
  };

  const cancleHandler = () => {
    setIsModal(false);
  };

  const bottomBarClickHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Wrapper onClick={onClickHandler}>
        <InputStyle
          ref={inputRef}
          onKeyUp={onKeyUpHandler}
          placeholder="키워드,주소 검색"
        />
        <MapComponent place={inputContent} />
        {drop ? (
          <BottomBar onClick={bottomBarClickHandler}>
            <BottomBarClick>ㅡ</BottomBarClick>
            <div>
              <BottomBarSpan1>내 주변 인기 저당 음료</BottomBarSpan1>
              <BottomBarSpan2 onClick={onClickHandlerSpan}>
                거리순∨
              </BottomBarSpan2>
            </div>
          </BottomBar>
        ) : (
          <></>
        )}
      </Wrapper>
      <MenuDiv>
        <p>스타벅스 슬렉점</p>
        <Rating name="read-only" defaultValue={2.5} precision={0.5} readOnly />
        <p>저당은 무슨 고당입니다~ 2.5점 드립니다. </p>
      </MenuDiv>
      {isModal ? (
        <Modal onClick={modalHandler}>
          <ModalWrapper onClick={modalWrapperHandler}>
            <ModalStandard>정렬 기준</ModalStandard>
            <ModalP>거리순</ModalP>
            <ModalP>인기순</ModalP>
            <ModalP>당류 낮은 순</ModalP>
            <ModalP2 onClick={cancleHandler}>취소</ModalP2>
          </ModalWrapper>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}
