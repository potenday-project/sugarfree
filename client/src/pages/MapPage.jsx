import { useEffect, useRef, useState } from "react";
import MapComponent from "../components/MapComponent";
import CarouselWrapper from "../components/CarouselWrapper";
import axios from "axios";
import {
  Wrapper,
  DetailDiv,
  BottomBar,
  BottomBarClick,
  BottomBarSpan1,
  BottomBarSpan2,
  Modal,
  ModalWrapper,
  ModalStandard,
  ModalP,
  ModalP2,
  CurrentImg,
  BottomBar2,
  InnerWrapper,
  DropWrapper,
  DropOuter,
  StarImg,
  DropFlex,
  StarAndReviewDiv,
  MenuStarSpan,
  DivideSpan,
  TitleP,
  ColoredSpan,
  NearDivWrapper,
  PopContainer,
} from "../styles/MapPage";

import { useSelector, useDispatch } from "react-redux";
import { cafesInfo } from "../assets/constantValues";
import { onDrop } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function MapPage() {
  const [isModal, setIsModal] = useState(false);
  const [current, setCurrent] = useState(false);
  const [auto, setAuto] = useState("");

  const inputRef = useRef(null);

  const navigate = useNavigate();

  const markerInfo = useSelector((state) => state.marker);
  const dispatch = useDispatch();

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

  const imgHandler = () => {
    setCurrent(!current);
  };

  const bottomBarClick = () => {
    if (markerInfo.content === "") {
      dispatch(onDrop({ clicked: false }));
    } else {
      dispatch(onDrop({ clicked: !markerInfo.clicked }));
    }
  };

  const [value, setValue] = useState("");
  const [distance, setDistance] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [cafes, setCafes] = useState([]);

  const asyncFucntion = async () => {
    // const data = await axios.post("/dummy/dummy2.json", {
    //   position: markerInfo.position, content:markerInfo.content, currentPosition : markerInfo.currentPosition
    // });
    const response = await axios.get("/dummy/dummy2.json");

    setDistance(response.data.distance);
  };

  const asyncFunction2 = async () => {
    const response = await axios.get("/dummy/dummy4.json"); // 검색별로 카페 제공
    setCafes(response.data);
  };

  useEffect(() => {
    asyncFunction2(); // 거리별로 데이터를 가져와야 하는데 개어렵자나
  }, [value]);

  useEffect(() => {
    asyncFucntion();
    let numberOfReviews = 0;
    markerInfo.menu?.forEach((el) => {
      numberOfReviews += el.reviews.length;
    });
    setReviews(numberOfReviews);
  }, [markerInfo]);

  const detailClickHandler = (item) => {
    navigate("/detail", { state: item });
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      setValue(inputRef.current.value);
      console.log("hey");
    }
  };

  const onChangeHandler = (e) => {
    setAuto(e.target.value);
  };

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <input
            onChange={onChangeHandler}
            ref={inputRef}
            type="text"
            onKeyDown={onKeyDownHandler}
          />
          <div>
            {inputRef.current?.value &&
              cafesInfo
                .filter((el) => {
                  return el.title.indexOf(auto) !== -1;
                })
                .map((el) => {
                  return <div key={el.title}>{el.title}</div>;
                })}
          </div>
        </InnerWrapper>
        <CurrentImg onClick={imgHandler} src="images/currentLocation.png" />
        <MapComponent place={value ? value : "카페"} current={current} />
        {markerInfo.clicked ? (
          <BottomBar>
            <BottomBarClick onClick={bottomBarClick}>ㅡ</BottomBarClick>
            <TitleP>{markerInfo.content}</TitleP>
            <p>{markerInfo.address}</p>
            <p>{distance}m 내</p>
            <img src="images/star.png" />
            <p>{markerInfo.cafeStar}</p>
            <p>리뷰 {reviews}</p>
            {markerInfo.menu ? (
              <>
                <p>이 카페의 인기 저당 음료</p> <span>별점순</span>
                <span>후기순</span>
              </>
            ) : (
              "정보없음"
            )}

            <DropFlex>
              {markerInfo.menu !== undefined ? (
                markerInfo.menu.map((el, idx) => {
                  return (
                    <DropOuter key={idx}>
                      <DropWrapper>
                        <img src={el.img} />
                        <span>{el.name}</span>
                        <span>{el.price}원</span>
                        <StarAndReviewDiv>
                          <StarImg src="/images/star.png" />
                          <MenuStarSpan>{el.menuStar}</MenuStarSpan>
                          <DivideSpan>|</DivideSpan>
                          <span>리뷰 {el.reviews.length}</span>
                        </StarAndReviewDiv>
                        <DetailDiv onClick={() => detailClickHandler(el)}>
                          자세히 보기
                        </DetailDiv>
                      </DropWrapper>
                    </DropOuter>
                  );
                })
              ) : (
                <></>
              )}
            </DropFlex>
          </BottomBar>
        ) : (
          <>
            <BottomBar2>
              <BottomBarClick onClick={bottomBarClick}>ㅡ</BottomBarClick>
              <PopContainer>
                <BottomBarSpan1>
                  내 주변 인기
                  <ColoredSpan> 저당 음료</ColoredSpan>
                </BottomBarSpan1>
                <BottomBarSpan2 onClick={onClickHandlerSpan}>
                  거리순∨
                </BottomBarSpan2>
                <NearDivWrapper>
                  {cafes.length > 0 && <CarouselWrapper items={cafes} />}
                </NearDivWrapper>
              </PopContainer>
            </BottomBar2>
          </>
        )}
      </Wrapper>

      {/* modal */}
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
