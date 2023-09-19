const { kakao } = window;
import { useState, useRef } from "react";
import UseMap from "../hooks/UseMap";
import {
  MainContainer,
  MapContainer,
  ZoomInButton,
  ZoomOutButton,
  ChangeViewButton,
  ChangeViewButton2,
  ButtonAndInput,
  MagImg,
  Inputstyle,
} from "../styles/Map";

function setMapType(map, maptype) {
  const roadmapControl = document.getElementById("btnRoadmap"); // 이러한 id를 가진 DOM요소를 찾는다
  const skyviewControl = document.getElementById("btnSkyview");
  if (maptype === "roadmap") {
    // 로드맵
    map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
    roadmapControl.className = "selected_btn";
    skyviewControl.className = "btn";
  } else {
    // 스카이뷰
    map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
    skyviewControl.className = "selected_btn";
    roadmapControl.className = "btn";
  }
}

export default function Map() {
  const [map, setMap] = useState(null); // 상태, React에서 상태란, 리렌더링 시에도 유지되는 변수라고 생각하면 됩니다!
  const [place, setPlace] = useState("");
  const [markers, setMarkers] = useState([]);

  const mapRef = useRef(null); // useRef는 여러 용도로 쓰일 수 있지만 여기서는 DOM요소를 잡기 위해 사용했습니다.

  function zoomIn() {
    // 줌인
    map.setLevel(map.getLevel() - 1);
  }

  function zoomOut() {
    // 줌 아웃
    map.setLevel(map.getLevel() + 1);
  }

  function onChangeHandler(e) {
    // 인풋 체인지 핸들러
    setPlace(e.target.value);
  }

  function inputKeyUpHandler(e) {
    if (e.key === "Enter") {
      // 누른 키가 엔터라면
      buttonClickHandler(place);
    }
  }

  function buttonClickHandler(place) {
    markers.forEach((el) => {
      el.setVisible(false); // 마커 지우기
    });

    setMarkers([]); // 마커를 담을 배열

    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 }); // z-index : z방향, 층이 높아지는 개념으로 보면 됨, 레이어의 1층 2층, 숫자가 높아질수록 높은 층
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(place, placesSearchCB); // 키워드로 검색하는 함수

    function placesSearchCB(data, status /* pagination*/) {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]); // 마커를 표시하는 함수
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      var imageSrc = "/images/sugar.png", // 마커이미지의 주소입니다
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        image: markerImage, // 마커이미지 설정
      });

      setMarkers((prev) => [...prev, marker]); // @todo : 최적화 필요

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          // 인포윈도우, 지도에서 보면 말풍선을 띄워주는 역할
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name + // 여기서는 장소 이름을 띄워줌
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }

  UseMap(mapRef, setMap); // 커스텀훅

  return (
    <>
      <MainContainer>
        <MapContainer ref={mapRef}>
          <ButtonAndInput>
            <Inputstyle
              onChange={onChangeHandler}
              onKeyUp={inputKeyUpHandler}
            />
            <MagImg
              onClick={() => buttonClickHandler(place)}
              src="/images/magnify.png"
              alt="돋보기"
            />
          </ButtonAndInput>
          <ZoomInButton onClick={zoomOut}>줌아웃</ZoomInButton>
          <ZoomOutButton onClick={zoomIn}>줌인</ZoomOutButton>
          <ChangeViewButton onClick={() => setMapType(map, "skyview")}>
            스카이뷰
          </ChangeViewButton>
          <ChangeViewButton2 onClick={() => setMapType(map, "roadmap")}>
            로드맵
          </ChangeViewButton2>
        </MapContainer>
        <div id="clickLatlng"></div>
      </MainContainer>
    </>
  );
}
