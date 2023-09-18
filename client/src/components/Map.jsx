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
} from "../styles/Map";

function setMapType(map, maptype) {
  const roadmapControl = document.getElementById("btnRoadmap");
  const skyviewControl = document.getElementById("btnSkyview");
  if (maptype === "roadmap") {
    map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
    roadmapControl.className = "selected_btn";
    skyviewControl.className = "btn";
  } else {
    map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
    skyviewControl.className = "selected_btn";
    roadmapControl.className = "btn";
  }
}

export default function Map() {
  const [map, setMap] = useState(null);
  const [place, setPlace] = useState("");
  const [markers, setMarkers] = useState([]);

  const mapRef = useRef(null);

  function zoomIn() {
    map.setLevel(map.getLevel() - 1);
  }

  function zoomOut() {
    map.setLevel(map.getLevel() + 1);
  }

  function onChangeHandler(e) {
    setPlace(e.target.value);
  }

  function buttonClickHandler(place) {
    markers.forEach((el) => {
      el.setVisible(false);
    });

    setMarkers([]);

    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(place, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
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

      setMarkers((prev) => [...prev, marker]); // 최적화 필요

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
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
        <ButtonAndInput>
          <label>
            검색하세요 <input onChange={onChangeHandler} />
          </label>
          <button onClick={() => buttonClickHandler(place)}>검색하기</button>
        </ButtonAndInput>
      </MainContainer>
    </>
  );
}
