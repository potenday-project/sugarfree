import styled from "styled-components";

export const SuggestDiv = styled.div`
  margin-bottom: 27px;
  margin-top: 19px;
`;

export const Star = styled.img`
  width: 18px;
  height: 18px;
  margin-bottom: 22px;
  margin-right: 3px;
`;

export const ClickedSpan = styled.div`
  color: #2ab7c0;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 13px;
  margin-left: 63px;
  margin-top: 37px;
`;

export const Img2 = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 100%;
`;

export const CommentNumber = styled.span`
  color: gray;
`;

export const ImgFlex = styled.div`
  display: flex;
`;

export const ClickedSpan2 = styled(ClickedSpan)`
  color: black;
  margin-right: 63px;
`;

export const ClickedSpan4 = styled(ClickedSpan)`
  margin-right: 63px;
`;

export const ClickedSpan3 = styled(ClickedSpan)`
  color: black;
`;

export const DivideDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NutrientDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NutReDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 13px;
  height: 20px;
`;

export const Nutrient = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HR = styled.hr`
  width: 100%;
`;

export const HR2 = styled.hr`
  width: 82px;
  background-color: #2ab7c0;
  margin-left: 50px;
  margin-top: 38px;
  height: 3px;
`;

export const HR3 = styled(HR2)`
  margin-left: 251px;
`;

export const Img = styled.img`
  width: 375px;
  height: 277px;
`;

export const StarSort = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StarFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoDiv = styled.div`
  background-color: #2ab7c0;
  color: white;
  width: 39px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 1rem;
  margin-right: 0.2rem;
`;
export const InfoDiv2 = styled(InfoDiv)`
  background-color: #8a8a8a;
  border-radius: 4px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 375px;
`;

export const Title = styled.p`
  font-size: 19px;
  position: absolute;
  top: 3%;
  left: 36%;
  background-color: white;
  border-radius: 5px;
  font-size: 12px;
  width: 109px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OuterWrapper = styled.div`
  position: relative;
  width: 375px;
  height: 100vh;
`;

export const Description = styled.p`
  color: gray;
`;

export const Price = styled.p`
  font-size: 20px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Name = styled.p`
  font-size: 19px;
  margin-top: 0.5rem;
`;

export const MenuStarFlex = styled.div`
  display: flex;
`;

export const Suggest2 = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-right: 107px;
`;

export const Suggest = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-left: 18px;
`;

export const ArrowSpan = styled.span`
  position: absolute;
  left: 8%;
  top: 3%;
  color: white;
  cursor: pointer;
`;

export const MapDiv = styled.div`
  margin-bottom: 16px;
`;
export const Recent = styled.div`
  cursor: pointer;
  font-size: 12px;
  height: 12px;
  position: relative;
`;

export const RecentDropDown = styled.div`
  position: absolute;
  top: 100%;
  width: 40px;
  background-color: gray;
  height: 30px;
`;

export const DropP = styled.p`
  &:hover {
    color: #2ab7c0;
  }
`;

export const ReviewButton = styled.div`
  cursor: pointer;
  background-color: #2ab7c0;
  color: white;
  width: 335px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
`;
