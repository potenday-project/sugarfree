import {
  ModalDivKakao,
  WrapperDiv,
  Img2,
  Img,
  ModalSpan,
  ModalDiv,
} from "../styles/CustomOveray";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setMarker, onDrop } from "../redux/userSlice";
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
        imgRef.current.src = "/images/whiteCup.png";
        modalRef.current.style.backgroundColor = "#2ab7c0";
        spanRef.current.style.color = "white";
      } else {
        imgRef2.current.src = "/images/highMenuClicked.png";
        modalRef2.current.style.backgroundColor = "#d6d6d6";
        spanRef2.current.style.color = "white";
      }
      dispatch(setMarker(marker));
      dispatch(onDrop({ clicked: true }));
    } else {
      if (!kakao) {
        imgRef.current.src = "/images/lowMenu.png";
        modalRef.current.style.backgroundColor = "white";
        spanRef.current.style.color = "#2ab7c0";
      } else {
        imgRef2.current.src = "/images/highMenu.png";
        modalRef2.current.style.backgroundColor = "white";
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
                <Img2 ref={imgRef2} src="images/highCafe.svg" />
                <ModalSpan ref={spanRef2}>{count}</ModalSpan>
              </div>
            </WrapperDiv>
          </ModalDivKakao>
        ) : (
          <ModalDiv ref={modalRef} onClick={onClickHandler}>
            <WrapperDiv className="wrap">
              <div>
                <Img ref={imgRef} src="images/lowCafe.svg" />
                <ModalSpan ref={spanRef}>{count}</ModalSpan>
              </div>
            </WrapperDiv>
          </ModalDiv>
        )}
      </div>
      <p>{marker.content}</p>
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
