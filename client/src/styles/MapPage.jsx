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
  border: 1px solid gray;
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
  width: 85px;
  height: 85px;
  cursor: pointer;
  z-index: 10;
  position: absolute;
  bottom: 25%;
  left: 2%;
`;

export const InnerWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 5%;
  z-index: 5;
  background-color: white;
`;

export const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 1;
  width: 375px;
  height: 812px;
  position: absolute;
  top: 0px;
  left: 0px;
  pointer-events: none;
`;

export const BottomBar = styled.div`
  position: absolute;
  bottom: 0%;
  z-index: 11;
  background-color: white;
  width: 100%;
  height: 251px;
  width: 375px;
`;

export const TitleP = styled.p`
  color: #2ab7c0;
  font-weight: bold;
  font-size: 17px;
`;

export const BottomBar2 = styled.div`
  overflow-x: hidden;
  position: absolute;
  z-index: 5;
  background-color: white;
  width: 375px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0%;
  flex-direction: column;
`;

export const BottomBarClick = styled.p`
  color: #d6d6d6;
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
`;

export const BottomBarSpan1 = styled.span`
  display: block;
  margin-right: 4rem;
  font-size: 17px;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const ColoredSpan = styled.span`
  color: #2ab7c0;
  font-weight: bold;
`;

export const BottomBarSpan2 = styled.span`
  margin-left: 110px;
  cursor: pointer;
`;

export const Modal = styled.div`
  width: 375px;
  height: 812px;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 15;
  position: absolute;
  backdrop-filter: blur(4px);
`;

export const BottomDiv = styled.div``;

export const ModalWrapper = styled.div`
  width: 257px;
  height: 223px;
  position: absolute;
  top: 294px;
  left: 59px;
  background-color: white;
  z-index: 10;
  display: flex;
  align-items: start;
  flex-direction: column;
  border-radius: 11px;
`;

export const RatingSor = styled.span`
  font-size: 12px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: #2ab7c0;
    font-weight: bold;
  }
`;

export const BottomBar3 = styled(BottomBar2)`
  z-index: 10;
  width: 100%;
  left: 0%;
`;

export const CoffeeImg2 = styled.img`
  width: 139px;
  height: 100px;
`;

export const ReviewSor = styled(RatingSor)`
  margin-right: 0px;
`;

export const TitleP2 = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-right: 118px;
`;

export const IPP = styled.div`
  display: flex;
`;

export const PopSpan = styled.span`
  color: #2ab7c0;
`;

export const DistDiv = styled.div`
  display: flex;
`;

export const RatingDiv = styled.div`
  display: flex;
`;

export const ReviewP = styled.p`
  color: gray;
  font-size: 12px;
`;

export const CafeHR = styled.hr`
  width: 100%;
`;

export const StarP = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

export const DistP = styled.p`
  color: gray;

  font-size: 14px;
`;

export const AddressP = styled.p`
  color: gray;
  font-size: 14px;
  margin-left: 15px;
`;

export const BottomBarClickContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HRLine = styled.hr`
  width: 100%;
  border-color: #d6d6d6;
  border: none; /* 기존 테두리 제거 */
  border-top: 2px solid #d6d6d6; /* 위쪽 테두리 설정 */
`;

export const ModalStandard = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-left: 24px;
  margin-top: 23px;
`;

export const ModalP = styled.p`
  margin-top: 15px;
  font-size: 15px;
  font-weight: bold;
  margin-left: 24px;
  cursor: pointer;
  &:hover {
    color: #2ab7c0;
  }
`;

export const ModalP3 = styled(ModalP)`
  margin-top: 0px;
`;

export const ModalP2 = styled.p`
  text-align: right;
  width: 100%;
  margin-right: 18px;
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

export const NearDivWrapper = styled.div`
  display: flex;
  width: 375px;
  margin-left: 55px;
  margin-top: 32px;
`;

export const CoffeeImg = styled.img`
  width: 60px;
  border-radius: 100%;
  height: 60px;
`;

export const PopContainer = styled.div``;

export const ArrowImg = styled.img`
  width: 8px;
  height: 4px;
  margin-left: 7px;
  margin-bottom: 2px;
`;

export const ModalFlex = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  margin-top: 15px;
`;

export const CheckFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 18px;
`;

export const CheckFlex2 = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
`;

export const CheckImg = styled.img`
  margin-right: 19px;
  margin-top: 22px;
`;

export const CheckImg2 = styled.img`
  margin-top: 0px;
  margin-right: 19px;
`;

export const Input = styled.input`
  width: 347px;
  padding: 1px;
  height: 42px;
  position: absolute;
  border-radius: 10px;
  top: 54px;
  left: 14px;
  padding-left: 46px;
  padding-top: 12px;
  padding-bottom: 12px;
  z-index: 5;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const HamImg = styled.img`
  z-index: 6;
  position: absolute;
  top: 68px;
  left: 31px;
  cursor: pointer;
`;

export const MagImg = styled.img`
  z-index: 6;
  position: absolute;
  top: 65px;
  right: 29px;
  cursor: pointer;
`;

export const AutoDiv = styled.div`
  width: 345px;
  padding-left: 17px;
  border-radius: 0 0 10px 10px;
  font-size: 15px;
  padding-top: 16px;
  position: absolute;
  top: 90px;
  z-index: 5;
  left: 16px;
  background-color: white;
`;

export const AutoP = styled.p`
  margin-left: 17px;
  height: 18px;
  margin-bottom: 22px;
  color: gray;
  cursor: pointer;
`;

export const SpanFlexDiv = styled.div`
  display: flex;
`;

export const BottomTitle = styled.p`
  color: #2ab7c0;
  font-weight: bold;
  font-size: 17px;
`;

export const BottomAddress = styled.p`
  color: gray;
  font-size: 14px;
`;

export const BottomTime = styled.p`
  font-size: 13px;
`;

export const BottomStar = styled.p`
  font-weight: bold;
  font-size: 12px;
`;

export const BottomReviews = styled.p`
  color: gray;
  font-size: 12px;
`;
