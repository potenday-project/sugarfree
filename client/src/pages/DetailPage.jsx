import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  SuggestDiv,
  Star,
  ClickedSpan,
  Img2,
  CommentNumber,
  ImgFlex,
  ClickedSpan2,
  ClickedSpan3,
  ClickedSpan4,
  DivideDiv,
  NutrientDiv,
  NutReDiv,
  Nutrient,
  HR,
  HR2,
  HR3,
  Img,
  StarSort,
  StarFlex,
  InfoDiv,
  InfoDiv2,
  InfoWrapper,
  Title,
  OuterWrapper,
  Description,
  Price,
  Name,
  MenuStarFlex,
  Suggest2,
  Suggest,
  ArrowSpan,
  MapDiv,
  Recent,
  RecentDropDown,
  DropP,
  ReviewButton,
} from "../styles/DetailPage";
import axios from "axios";
import Rating from "@mui/material/Rating";

export default function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const markerInfo = useSelector((state) => state.marker);

  const [users, setUsers] = useState([]);
  const [item, setItem] = useState({});
  const [clicked, setClicked] = useState("성분");
  const [isVisible, setIsVisible] = useState(false);

  const asyncFunction = async () => {
    //const filteredArr = item.reviews.filter((el) => el.userId);
    const response = await axios.get("/dummy/dummy3.json"); // @todo : 실제로는 post로 유저 id를 건네주고 정보를 받아와야함
    setUsers(response.data);
  };

  useEffect(() => {
    setItem(location.state);
    asyncFunction();
  }, []);

  const onClickHandler = (type) => {
    if (type === "성분") {
      setClicked("성분");
    } else {
      setClicked("리뷰");
    }
  };

  const onClickHandler2 = () => {
    setIsVisible(!isVisible);
  };

  return (
    <OuterWrapper>
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
                  리뷰 <CommentNumber>{item.reviews?.length}</CommentNumber>
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
                <ClickedSpan3 onClick={() => onClickHandler("성분")}>
                  성분정보
                </ClickedSpan3>
                <ClickedSpan4 onClick={() => onClickHandler("리뷰")}>
                  리뷰 <CommentNumber>{item.reviews?.length}</CommentNumber>
                </ClickedSpan4>
              </NutReDiv>
              <HR3 />
              <StarSort>
                <MenuStarFlex>
                  <Star src="images/star.png" />
                  <span>{item.menuStar}</span>
                </MenuStarFlex>
                <Recent onClick={onClickHandler2}>
                  최신순
                  {isVisible ? (
                    <RecentDropDown>
                      <DropP>최신순</DropP>
                      <DropP>별점순</DropP>
                    </RecentDropDown>
                  ) : (
                    <></>
                  )}
                </Recent>
              </StarSort>
              {item.reviews.map((el, idx) => {
                return (
                  <MapDiv key={users[idx].nickname}>
                    <ImgFlex>
                      <Img2 src={users[idx].imgUrl} />
                      <StarFlex>
                        <span>{users[idx].nickname}</span>
                        <Rating
                          name="read-only"
                          value={el.userStar}
                          readOnly
                          precision={0.5}
                        />
                      </StarFlex>
                    </ImgFlex>
                    <span>#{users[idx].tags}</span>
                    <p>{el.content}</p>
                    <img src={el.imageUrl} />
                    <p>{el.createdAt} 작성</p>
                  </MapDiv>
                );
              })}
              <ReviewButton>리뷰 작성</ReviewButton>
            </>
          )}
        </DivideDiv>
      )}
    </OuterWrapper>
  );
}
