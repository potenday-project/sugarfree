import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const { kakao } = window;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MapContainer = styled.div`
  width: 800px;
  height: 800px;
  position: relative;
`;

const ZoomInButton = styled.button`
  width: 100px;
  height: 20px;
  position: absolute;
  top: 15%;
  right: 10%;
  z-index: 5;
`;

const ZoomOutButton = styled.button`
  width: 100px;
  height: 20px;
  position: absolute;
  top: 10%;
  right: 10%;
  z-index: 5;
`;

const ChangeViewButton = styled.button`
  width: 100px;
  height: 20px;
  position: absolute;
  top: 5%;
  right: 10%;
  z-index: 5;
`;

const ChangeViewButton2 = styled.button`
  width: 100px;
  height: 20px;
  position: absolute;
  top: 0%;
  right: 10%;
  z-index: 5;
`;
function setMapType(map, maptype) {
  var roadmapControl = document.getElementById("btnRoadmap");
  var skyviewControl = document.getElementById("btnSkyview");
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

function App() {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);

  function zoomIn() {
    map.setLevel(map.getLevel() - 1);
  }

  function zoomOut() {
    map.setLevel(map.getLevel() + 1);
  }

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    if (mapRef.current) {
      const map = new kakao.maps.Map(mapRef.current, options);
      setMap(map);
    }
  }, []);

  return (
    <MainContainer>
      <MapContainer ref={mapRef} style={{ width: "800px", height: "800px" }}>
        <ZoomInButton onClick={zoomOut}>줌아웃</ZoomInButton>
        <ZoomOutButton onClick={zoomIn}>줌인</ZoomOutButton>
        <ChangeViewButton onClick={() => setMapType(map, "skyview")}>
          버튼
        </ChangeViewButton>
        <ChangeViewButton2 onClick={() => setMapType(map, "roadmap")}>
          버튼2
        </ChangeViewButton2>
      </MapContainer>
      <p>지도에요</p>
    </MainContainer>
  );
}

export default App;
