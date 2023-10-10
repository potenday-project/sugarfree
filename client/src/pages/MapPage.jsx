import { useEffect, useRef, useState } from "react";
import MapComponent from "../components/MapComponent";
import CarouselWrapper from "../components/CarouselWrapper";
import HamburgerBar from "../components/HamburgerBar";
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
  DropWrapper,
  DropOuter,
  StarImg,
  DropFlex,
  StarAndReviewDiv,
  MenuStarSpan,
  DivideSpan,
  TitleP,
  ColoredSpan,
  PopContainer,
  ArrowImg,
  HRLine,
  ModalP3,
  ModalFlex,
  CheckFlex,
  CheckImg,
  CheckImg2,
  CheckFlex2,
  Input,
  HamImg,
  MagImg,
  AutoDiv,
  AutoP,
  SpanFlexDiv,
  BottomBarClickContainer,
  AddressP,
  DistDiv,
  DistP,
  IPP,
  StarP,
  ReviewP,
  CafeHR,
  TitleP2,
  PopSpan,
  RatingDiv,
  RatingSor,
  ReviewSor,
  CoffeeImg2,
  BottomBar3,
  BottomTitle,
  BottomAddress,
  BottomTime,
  BottomStar,
  BottomReviews,
} from "../styles/MapPage";

import { useSelector, useDispatch } from "react-redux";
import { cafesInfo } from "../assets/constantValues";
import { onDrop } from "../redux/markerSlice";
import { useNavigate } from "react-router-dom";

export default function MapPage() {
  const [isModal, setIsModal] = useState(false);
  const [current, setCurrent] = useState(false);
  const [auto, setAuto] = useState("");
  const [value, setValue] = useState("");
  const [distance, setDistance] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [cafes, setCafes] = useState([]);
  const [which, setWhich] = useState(0);
  const [sort, setSort] = useState("거리순");
  const [isVisible, setIsVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [ham, setHam] = useState(false);

  const imgRef = useRef(null);
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
    setCurrent(true);
  };

  useEffect(() => {
    if (current) {
      imgRef.current.src = "/images/currentClicked.png";
    } else {
      imgRef.current.src = "/images/current.png";
    }
  }, [current]);

  const bottomBarClick = () => {
    if (markerInfo.content === "") {
      dispatch(onDrop({ clicked: false }));
    } else {
      dispatch(onDrop({ clicked: !markerInfo.clicked }));
    }
  };

  const asyncFucntion = async () => {
    // const data = await axios.post("/dummy/dummy2.json", {
    //   position: markerInfo.position, content:markerInfo.content, currentPosition : markerInfo.currentPosition
    // });
    const response = await axios.get("/dummy/dummy2.json");

    setDistance(response.data.distance);
  };

  const asyncFunction2 = async () => {
    const response = await axios.get("/dummy/dummy4.json"); // 검색별로 카페 제공 value 값을 이용
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

  useEffect(() => {
    if (markerInfo.clicked) {
      setIsSearch(false);
    }
  }, [markerInfo.clicked]);

  const detailClickHandler = (item) => {
    navigate("/detail", { state: item });
  };

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      setValue(inputRef.current.value);
      setIsVisible(false);
      setIsSearch(true);
      dispatch(onDrop({ clicked: false }));
    }
  };

  const onChangeHandler = (e) => {
    setAuto(e.target.value);
    setIsVisible(true);
  };

  const checkBoxHandler = (idx) => {
    setWhich(idx);
    if (idx === 0) {
      setSort("거리순");
    } else if (idx === 1) {
      setSort("인기순");
    } else {
      setSort("당류낮은순");
    }
    setIsModal(false);
  };

  const magClickHandler = () => {
    setValue(inputRef.current?.value);
    setIsVisible(false);
    setIsSearch(true);
    dispatch(onDrop({ clicked: false }));
  };

  const autoHanlder = (title) => {
    setValue(title);
    inputRef.current.value = title;
    setIsVisible(false);
  };

  const bottomBarClick2 = () => {
    setIsSearch(false);
  };

  const hamburgerClick = () => {
    setHam(!ham);
  };

  return (
    <>
      <HamImg src="/images/hamburger.svg" onClick={hamburgerClick} />
      {ham && <HamburgerBar setHam={setHam} />}
      <Input
        onChange={onChangeHandler}
        ref={inputRef}
        type="text"
        onKeyDown={onKeyDownHandler}
        placeholder="키워드, 주소 검색"
      />
      <MagImg src="/images/magnify.svg" onClick={magClickHandler} />

      {isVisible ? (
        inputRef.current?.value &&
        cafesInfo
          .filter((el) => {
            return el.title.indexOf(auto) !== -1;
          })
          .map((el) => {
            return (
              <AutoDiv key={el.title}>
                <AutoP onClick={() => autoHanlder(el.title)}>{el.title}</AutoP>
              </AutoDiv>
            );
          })
      ) : (
        <></>
      )}

      <CurrentImg onClick={imgHandler} ref={imgRef} src="/images/current.png" />
      <MapComponent
        place={value ? value : "카페"}
        current={current}
        isSearch={isSearch}
        setCurrent={setCurrent}
      />
      {markerInfo.clicked ? (
        <BottomBar>
          <BottomBarClickContainer>
            <BottomBarClick onClick={bottomBarClick}>ㅡ</BottomBarClick>
          </BottomBarClickContainer>
          <TitleP>{markerInfo.content}</TitleP>
          <DistDiv>
            <DistP>반경 {distance}m 내</DistP>
            <AddressP>{markerInfo.address}</AddressP>
          </DistDiv>
          <p>{markerInfo.time}</p>
          <IPP>
            <img src="images/star.png" />
            <StarP>{markerInfo.cafeStar}</StarP>
            <ReviewP>리뷰 {reviews}</ReviewP>
          </IPP>
          <CafeHR />
          {markerInfo.menu ? (
            <>
              <RatingDiv>
                <TitleP2>
                  이 카페의 <PopSpan>인기 저당 음료</PopSpan>
                </TitleP2>
                <RatingSor>별점순</RatingSor>
                <span>|</span>
                <ReviewSor>후기순</ReviewSor>
              </RatingDiv>
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
                      <CoffeeImg2 src={el.img} />
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
        isSearch && (
          <BottomBar3>
            <BottomBarClick onClick={bottomBarClick2}>ㅡ</BottomBarClick>
            {cafes.map((el) => {
              return (
                <div key={el.content}>
                  <BottomTitle>{el.content}</BottomTitle>
                  <BottomAddress> {el.address}</BottomAddress>
                  <BottomTime> {el.time}</BottomTime>
                  <img src="/images/star.png" />
                  <BottomStar> {el.cafeStar}</BottomStar>
                  <BottomReviews>
                    리뷰
                    {el.menu.reduce(
                      (acc, cur) => (acc += cur.reviews.length),
                      0
                    )}
                  </BottomReviews>
                  <hr />
                </div>
              );
            })}
          </BottomBar3>
        )
      )}
      <>
        <BottomBar2>
          <BottomBarClick onClick={bottomBarClick}>ㅡ</BottomBarClick>
          <PopContainer>
            <SpanFlexDiv>
              <BottomBarSpan1>
                내 주변
                <ColoredSpan> 인기 저당 음료</ColoredSpan>
              </BottomBarSpan1>
              <BottomBarSpan2 onClick={onClickHandlerSpan}>
                {sort}
                <ArrowImg src="/images/arrowDown.svg" />
              </BottomBarSpan2>
            </SpanFlexDiv>
            {cafes.length > 0 && <CarouselWrapper items={cafes} />}
          </PopContainer>
        </BottomBar2>
      </>

      {/* modal */}
      {isModal ? (
        <Modal onClick={modalHandler}>
          <ModalWrapper onClick={modalWrapperHandler}>
            <ModalStandard>정렬 기준</ModalStandard>
            <CheckFlex2>
              <ModalP onClick={() => checkBoxHandler(0)}>거리순</ModalP>
              {which === 0 && <CheckImg src="/images/checkBox.svg" />}
            </CheckFlex2>
            <HRLine />
            <CheckFlex>
              <ModalP3 onClick={() => checkBoxHandler(1)}>인기순</ModalP3>
              {which === 1 && <CheckImg2 src="/images/checkBox.svg" />}
            </CheckFlex>
            <HRLine />
            <CheckFlex>
              <ModalP3 onClick={() => checkBoxHandler(2)}>당류 낮은 순</ModalP3>
              {which === 2 && <CheckImg2 src="/images/checkBox.svg" />}
            </CheckFlex>
            <HRLine />
            <ModalFlex>
              <ModalP2 onClick={cancleHandler}>취소</ModalP2>
            </ModalFlex>
          </ModalWrapper>
        </Modal>
      ) : (
        <></>
      )}
      <Wrapper></Wrapper>
    </>
  );
}
