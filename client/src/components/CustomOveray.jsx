import {
  ModalDivKakao,
  WrapperDiv,
  Img2,
  Img,
  ModalSpan,
  ModalDiv,
  MarkerContent,
} from "../styles/CustomOveray";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setMarker, onDrop } from "../redux/markerSlice";

export default function CustomOveray({
  count,
  kakao,
  selected,
  setSelected,
  index,
  marker,
}) {
  const imgRef = useRef(null);
  const imgRef2 = useRef(null);
  const modalRef = useRef(null);
  const modalRef2 = useRef(null);
  const spanRef = useRef(null);
  const spanRef2 = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (index === selected) {
      if (!kakao) {
        imgRef.current.src = "/images/lowColor.svg";
        spanRef.current.style.color = "white";
      } else {
        imgRef2.current.src = "/images/highColor.svg";
        spanRef2.current.style.color = "white";
      }
      dispatch(setMarker(marker));
      dispatch(onDrop({ clicked: true }));
    } else {
      if (!kakao) {
        imgRef.current.src = "/images/lowNot.svg";
        spanRef.current.style.color = "#2ab7c0";
      } else {
        imgRef2.current.src = "/images/highNot.svg";
        spanRef2.current.style.color = "gray";
      }
    }
  }, [selected, index, kakao]);

  const onClickHandler = () => {
    setSelected(index);
  };

  return (
    <>
      <div>
        {kakao ? (
          <ModalDivKakao ref={modalRef2} onClick={onClickHandler}>
            <WrapperDiv className="wrap">
              <div>
                <Img2 ref={imgRef2} src="images/highNot.svg" />
                <ModalSpan ref={spanRef2}>{count}</ModalSpan>
              </div>
            </WrapperDiv>
          </ModalDivKakao>
        ) : (
          <ModalDiv ref={modalRef} onClick={onClickHandler}>
            <WrapperDiv className="wrap">
              <div>
                <Img ref={imgRef} src="images/lowNot.svg" />
                <ModalSpan ref={spanRef}>{count}</ModalSpan>
              </div>
            </WrapperDiv>
          </ModalDiv>
        )}
      </div>
      <MarkerContent>{marker.content}</MarkerContent>
    </>
  );
}

CustomOveray.propTypes = {
  count: PropTypes.number.isRequired,
  kakao: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  setSelected: PropTypes.func.isRequired,
  marker: PropTypes.object.isRequired,
};
