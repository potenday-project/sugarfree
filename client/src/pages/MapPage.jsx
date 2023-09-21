import { useRef, useState } from "react";
import MapComponent from "../components/MapComponent";
import Rating from "@mui/material/Rating";
import {
  Wrapper,
  InputStyle,
  BottomBar,
  BottomBarClick,
  BottomBarSpan1,
  BottomBarSpan2,
  MenuDiv,
  Modal,
  ModalWrapper,
  ModalStandard,
  ModalP,
  ModalP2,
  CurrentImg,
} from "../styles/MapPage";

export default function MapPage() {
  const [drop, setDrop] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const inputRef = useRef(null);
  const [inputContent, SetInputContent] = useState(" ");
  const [current, setCurrent] = useState(false);

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

  const imgHandler = () => {
    setCurrent(!current);
  };

  return (
    <>
      <Wrapper onClick={onClickHandler}>
        <InputStyle
          ref={inputRef}
          onKeyUp={onKeyUpHandler}
          placeholder="키워드,주소 검색"
        />
        <CurrentImg onClick={imgHandler} src="images/currentLocation.png" />
        <MapComponent place={inputContent} current={current} />
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
