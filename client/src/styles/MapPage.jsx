import styled from "styled-components";

export const MenuDiv = styled.div`
  font-family: var(--nanum);
`;

export const InputStyle = styled.input`
  width: 347px;
  height: 42px;
  border-radius: 5px;
  left: 5%;
  position: absolute;
  z-index: 5;
`;

export const DropOuter = styled.div`
  display: flex;
`;

export const DropWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: start;
`;

export const StarImg = styled.img`
  margin-right: 0.2rem;
`;

export const DropFlex = styled.div`
  display: flex;
`;

export const MenuStarSpan = styled.span`
  margin-right: 1rem;
  margin-left: 0.1rem;
  margin-top: 0.2rem;
`;

export const DivideSpan = styled.span`
  margin-right: 0.3rem;
`;

export const StarAndReviewDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CurrentImg = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  z-index: 10;
  position: absolute;
  bottom: 15%;
  left: 3%;
`;

export const InnerWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 5%;
  z-index: 5;
  background-color: white;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const BottomBar = styled.div`
  position: absolute;
  bottom: 0%;
  z-index: 11;
  background-color: white;
  width: 100%;
  height: 310px;
  text-align: center;
`;

export const TitleP = styled.p`
  color: #2ab7c0;
`;

export const BottomBar2 = styled.div`
  position: absolute;
  z-index: 5;
  background-color: white;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0%;
  flex-direction: column;
`;

export const BottomBarClick = styled.p`
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  color: red;
`;

export const BottomBarSpan1 = styled.span`
  margin-right: 4rem;
  font-size: 17px;
  margin-bottom: 32px;
`;

export const ColoredSpan = styled.span`
  color: #2ab7c0;
`;

export const BottomBarSpan2 = styled.span`
  margin-left: 4rem;
  cursor: pointer;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9;
  position: absolute;
`;

export const BottomDiv = styled.div``;

export const ModalWrapper = styled.div`
  width: 257px;
  height: 223px;
  position: absolute;
  top: 20%;
  right: 39%;
  background-color: white;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 11px;
`;

export const ModalStandard = styled.p`
  margin-top: 2rem;
`;

export const ModalP = styled.p`
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    color: #2ab7c0;
  }
`;

export const ModalP2 = styled.p`
  text-align: right;
  width: 100%;
  margin-right: 1rem;
  cursor: pointer;
`;

export const DetailDiv = styled.div`
  color: #2ab7c0;
  border: 1px solid #2ab7c0;
  width: 139px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2ab7c0;
    color: white;
  }
`;

export const NearDiv = styled.div`
  display: flex;
`;

export const NearDivWrapper = styled.div`
  display: flex;
`;

export const CoffeeImg = styled.img`
  width: 60px;
  border-radius: 100%;
  height: 60px;
`;

export const PopContainer = styled.div``;
