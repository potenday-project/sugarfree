import { useState } from "react";
import MapComponent from "../components/MapComponent";
import Rating from "@mui/material/Rating";
import {
  Wrapper,
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
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { cafes } from "../assets/constantValues";
const filter = createFilterOptions();

export default function MapPage() {
  const [drop, setDrop] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [current, setCurrent] = useState(false);

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

  const [value, setValue] = useState("");
  return (
    <>
      <Wrapper onClick={onClickHandler}>
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
          sx={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label="키워드, 장소를 검색하세요" />
          )}
        />
        <CurrentImg onClick={imgHandler} src="images/currentLocation.png" />
        <MapComponent place={value ? value.title : ""} current={current} />
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
