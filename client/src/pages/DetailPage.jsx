import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const SuggestDiv = styled.div`
  margin-bottom: 27px;
  margin-top: 19px;
`;

export const ClickedSpan = styled.div`
  color: #2ab7c0;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 13px;
  margin-left: 63px;
  margin-top: 37px;
`;

export const ClickedSpan2 = styled(ClickedSpan)`
  margin-right: 63px;
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

export const Img = styled.img`
  width: 375px;
  height: 277px;
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
  top: 9%;
  left: 46%;
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
  left: 37%;
  top: 5%;
  color: white;
  cursor: pointer;
`;

export default function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const markerInfo = useSelector((state) => state.marker);

  const [item, setItem] = useState({});
  const [clicked, setClicked] = useState("성분");

  useEffect(() => {
    setItem(location.state);
    console.log(location.state);
  }, []);

  const onClickHandler = (type) => {
    if (type === "성분") {
      setClicked("성분");
    } else {
      setClicked("리뷰");
    }
  };

  return (
    <div>
      <Img src="/images/coffee1.png" />
      <ArrowSpan onClick={() => navigate("/map")}>{"<"}</ArrowSpan>
      <InfoWrapper>
        <InfoDiv>
          <span>저당</span>
        </InfoDiv>
        <InfoDiv2>
          <span>0g</span>
        </InfoDiv2>
      </InfoWrapper>
      <Title>{markerInfo.content}</Title>
      <Name>{item.name}</Name>
      <Price>{item.price}원</Price>
      <Description>{item.description}</Description>
      {item.nutrients && (
        <DivideDiv>
          {clicked === "성분" ? (
            <>
              <NutReDiv>
                <ClickedSpan>성분정보</ClickedSpan>
                <ClickedSpan2 onClick={() => onClickHandler("리뷰")}>
                  리뷰 <span>{item.reviews?.length}</span>
                </ClickedSpan2>
              </NutReDiv>
              <HR2 />
              <SuggestDiv>
                <Suggest2>하루 당 권장량의 10%</Suggest2>
                <Suggest>{"Tall(355ml,12fl oz)기준"}</Suggest>
              </SuggestDiv>

              <NutrientDiv>
                <Nutrient>
                  <p>칼로리</p>
                  <p>{item.nutrients.calories}kcal</p>
                </Nutrient>
                <HR />
                <Nutrient>
                  <p>탄수화물</p>
                  <p>{item.nutrients.carbon}g</p>
                </Nutrient>
                <HR />
                <Nutrient>
                  <p>당류</p>
                  <p>{item.nutrients.sugar}g</p>
                </Nutrient>
                <HR />
                <Nutrient>
                  <p>나트륨</p>
                  <p>{item.nutrients.sodium}mg</p>
                </Nutrient>
                <HR />
                <Nutrient>
                  <p>단백질</p>
                  <p>{item.nutrients.protein}g</p>
                </Nutrient>
                <HR />
                <Nutrient>
                  <p>지방</p>
                  <p>{item.nutrients.fat}g</p>
                </Nutrient>
                <HR />
                <Nutrient>
                  <p>콜레스테롤</p>
                  <p>{item.nutrients.colesterol}mg</p>
                </Nutrient>
                <HR />
                <Nutrient>
                  <p>트랜스지방</p>
                  <p>{item.nutrients.transFat}g</p>
                </Nutrient>
                <HR />
                <Nutrient>
                  <p>카페인</p>
                  <p>{item.nutrients.caffeine}mg</p>
                </Nutrient>
                <HR />
                <Nutrient>
                  <p>포화지방</p>
                  <p>{item.nutrients.fourFat}g</p>
                </Nutrient>
                <HR />
                <div>최근 업데이트 날짜</div>
              </NutrientDiv>
            </>
          ) : (
            <>
              <NutReDiv>
                <ClickedSpan onClick={() => onClickHandler("성분")}>
                  성분정보
                </ClickedSpan>
                <ClickedSpan2 onClick={() => onClickHandler("리뷰")}>
                  리뷰 <span>{item.reviews?.length}</span>
                </ClickedSpan2>
              </NutReDiv>
              <HR2 />
            </>
          )}
        </DivideDiv>
      )}
    </div>
  );
}
