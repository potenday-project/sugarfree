import { useEffect } from "react";
const { kakao } = window;

export default function UseMap(mapRef, setMap) {
  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    if (mapRef.current) {
      const map = new kakao.maps.Map(mapRef.current, options);
      setMap(map);
      const marker = new kakao.maps.Marker({
        // 지도 중심좌표에 마커를 생성합니다
        position: map.getCenter(),
      });

      marker.setMap(map);

      kakao.maps.event.addListener(map, "click", function (mouseEvent) {
        // 클릭한 위도, 경도 정보를 가져옵니다
        const latlng = mouseEvent.latLng;
        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);

        let message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
        message += "경도는 " + latlng.getLng() + " 입니다";

        const resultDiv = document.getElementById("clickLatlng");
        resultDiv.innerHTML = message;
      });
    }
  }, []);
}
