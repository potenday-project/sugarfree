import useEmblaCarousel from "embla-carousel-react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onDrop, setMarker } from "../redux/userSlice";

export const EmblaSlide = styled.div`
  position: relative;

  & > img {
    display: block;
  }
  & > .embla__slide__link {
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 15px;
    text-decoration: underline;
    color: white;
    font-size: 10px;
  }
`;

export const EmblaContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -20px;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

export const FlexDiv = styled.div`
  display: flex;
  margin-top: 32px;
`;

export const FlexDiv2 = styled.div`
  display: flex;
  margin-right: 8px;
`;

export const NutCafeP = styled.p`
  cursor: pointer;
  width: 95px;
  height: 32px;
  border: 1px solid #2ab7c0;
  margin-right: 6px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2ab7c0;
  margin-bottom: 3px;
  margin-top: 19px;
  &:hover {
    background-color: #2ab7c0;
    color: white;
  }
`;

export const PlaceP = styled.p`
  margin-top: 3px;
  color: gray;
  text-align: left;
  margin-left: 13px;
`;

export const MenuP = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  margin-left: 13px;
`;

export default function Carousel({ slides, options }) {
  const [emblaRef] = useEmblaCarousel(options);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = (type, slide, data) => {
    if (type === "성분표") {
      dispatch(setMarker(slide));
      navigate("/detail", { state: data });
    } else {
      dispatch(setMarker(slide));
      dispatch(onDrop({ clicked: true }));
    }
  };

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <EmblaContainer className="embla__container">
          {slides.map((slide, index) => (
            <EmblaSlide className="embla__slide" key={index}>
              <FlexDiv>
                <Img className="embla__slide__img" src={slide.menu[0].img} />
                <div>
                  <MenuP>{slide.menu[0].name}</MenuP>
                  <PlaceP>{slide.address}</PlaceP>
                </div>
              </FlexDiv>
              <FlexDiv2>
                <NutCafeP
                  onClick={() => onClickHandler("성분표", slide, slide.menu[0])}
                >
                  성분표
                </NutCafeP>
                <NutCafeP
                  onClick={() => onClickHandler("카페정보", slide, null)}
                >
                  카페정보
                </NutCafeP>
              </FlexDiv2>
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
};
