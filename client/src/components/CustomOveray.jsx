import styled from "styled-components";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalDiv = styled.div`
  height: 33px;
  width: 62px;
  z-index: 5;
  background-color: white;
  display: flex;
  border: 1px solid #2ab7c0;
  border-radius: 12px;
  color: #2ab7c0;
  position: relative;
`;

const WrapperDiv = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 20px;
  height: 13px;
  top: 27%;
  left: 22%;
  position: absolute;
`;

const ModalSpan = styled.span`
  right: 15%;
  bottom: 25%;
  position: absolute;
`;

const HighImg = styled.img`
  z-index: 5;
  width: 34px;
  height: 34px;
`;

export default function CustomOveray({ count, kakao }) {
  const [color, setColor] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const imgRef = useRef(null);
  const modalRef = useRef(null);
  const spanRef = useRef(null);

  const onClickHandler = () => {
    if (color) {
      imgRef.current.src = "/images/whiteCup.png";
      modalRef.current.style.backgroundColor = "#2ab7c0";
      spanRef.current.style.color = "white";
      handleOpen();
    } else {
      imgRef.current.src = "/images/lowMenu.png";
      modalRef.current.style.backgroundColor = "white";
      spanRef.current.style.color = "#2ab7c0";
      handleClose();
    }
    setColor(!color);
  };

  return (
    <>
      <div>
        {kakao ? (
          <WrapperDiv className="wrap">
            <div>
              <HighImg src="images/highMenu.png" />
            </div>
          </WrapperDiv>
        ) : (
          <ModalDiv ref={modalRef} onClick={onClickHandler}>
            <WrapperDiv className="wrap">
              <div>
                <Img ref={imgRef} src="images/lowMenu.png" />
                <ModalSpan ref={spanRef}>{count}</ModalSpan>
              </div>
            </WrapperDiv>
          </ModalDiv>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            스타벅스 멍멍점
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            안녕하세요 저는 멍멍이에요
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
CustomOveray.propTypes = {
  count: PropTypes.number.isRequired,
  kakao: PropTypes.bool.isRequired,
};
