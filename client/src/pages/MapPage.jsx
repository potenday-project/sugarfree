import { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent";
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
} from "../styles/MapPage";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useSelector, useDispatch } from "react-redux";
import { cafes } from "../assets/constantValues";
import { onDrop } from "../redux/userSlice";
const filter = createFilterOptions();

export default function MapPage() {
  const [isModal, setIsModal] = useState(false);
  const [current, setCurrent] = useState(false);

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

  const asyncFucntion = async () => {
    // const data = await axios.post("/dummy/dummy2.json", {
    //   position: markerInfo.position, content:markerInfo.content, currentPosition : markerInfo.currentPosition
    // });
    const data = await axios.get("/dummy/dummy2.json");
    setDistance(data.data.distance);
  };

  useEffect(() => {
    asyncFucntion();
  }, []);

  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              if (typeof newValue === "string") {
                setValue({
                  title: newValue,
                });
              } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                setValue({
                  title: newValue.inputValue,
                });
              } else {
                setValue(newValue);
              }
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;
              // Suggest the creation of a new value
              const isExisting = options.some(
                (option) => inputValue === option.title
              );
              if (inputValue !== "" && !isExisting) {
                filtered.push({
                  inputValue,
                  title: `Add "${inputValue}"`,
                });
              }
              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={cafes}
            getOptionLabel={(option) => {
              // Value selected with enter, right from the input
              if (typeof option === "string") {
                return option;
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue;
              }
              // Regular option
              return option.title;
            }}
            renderOption={(props, option) => <li {...props}>{option.title}</li>}
            sx={{ width: 347 }}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label="키워드, 장소를 검색하세요" />
            )}
          />
        </InnerWrapper>
        <CurrentImg onClick={imgHandler} src="images/currentLocation.png" />
        <MapComponent place={value ? value.title : ""} current={current} />
        {markerInfo.clicked ? (
          <BottomBar>
            <BottomBarClick onClick={bottomBarClick}>ㅡ</BottomBarClick>
            <TitleP>{markerInfo.content}</TitleP>
            <p>{markerInfo.address}</p>
            <p>{distance}m 내</p>
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
                        <DetailDiv>자세히 보기</DetailDiv>
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
              <div>
                <BottomBarSpan1>내 주변 인기 저당 음료</BottomBarSpan1>
                <BottomBarSpan2 onClick={onClickHandlerSpan}>
                  거리순∨
                </BottomBarSpan2>
              </div>
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
