import styled from "styled-components";

export const ModalDiv = styled.div`
  z-index: 5;
  display: flex;
  position: relative;
`;

export const ModalDivKakao = styled(ModalDiv)`
  display: flex;
  border: none;
  z-index: 6;
  justify-content: center;
  align-items: center;
`;

export const WrapperDiv = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  position: relative;
`;

export const Img = styled.img`
  width: 100px;
  height: 68px;
  position: absolute;
`;

export const Img2 = styled.img`
  width: 100px;
  height: 68px;
  position: absolute;
`;

export const ModalSpan = styled.span`
  right: 27%;
  top: 20%;
  position: absolute;
  color: var(--Black, #252525);
  text-align: center;
  /* drop shadow_1_down */
  text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.14px;
`;

export const MarkerContent = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 40%);
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
  margin-top: 5px;
`;
