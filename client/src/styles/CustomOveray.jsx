import styled from "styled-components";

export const ModalDiv = styled.div`
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

export const ModalDivKakao = styled(ModalDiv)`
  background-color: white;
  display: flex;
  border: none;
  z-index: 6;
  border-radius: 12px;
  color: #d6d6d6;
  position: relative;
`;

export const WrapperDiv = styled.div`
  display: flex;
`;

export const Img = styled.img`
  width: 20px;
  height: 13px;
  top: 27%;
  left: 22%;
  position: absolute;
`;

export const Img2 = styled.img`
  top: 35%;
  width: 20px;
  height: 13px;
  left: 15%;
  position: absolute;
`;

export const ModalSpan = styled.span`
  right: 15%;
  bottom: 25%;
  position: absolute;
`;

export const MarkerContent = styled.p`
  color: #252525;
  text-align: center;
  /* drop shadow_1_down */
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.14px;
  margin-top: 8px;
  padding-right: 8px;
`;
