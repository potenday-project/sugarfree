import PropTypes from "prop-types";
import {
  Map,
  MapTypeControl,
  ZoomControl,
  MapMarker,
  CustomOverlayMap,
} from "react-kakao-maps-sdk";
import useKakaoLoader from "../hooks/useKakaoLoader";
import { useEffect, useState } from "react";
import CustomOveray from "./CustomOveray";

export default function MapComponent({ place }) {
  const [position, setPosition] = useState();
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useKakaoLoader();
  const markerPosition = {
    lat: 33.450701,
    lng: 126.570667,
  };

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places(); // kakao는 이미 불러져왔으므로 신경쓰지 않으셔도 됩니다.

    ps.keywordSearch(place, (data, status /*_pagination*/) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map, place]);

  return (
    <>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: "44%",
          height: "550px",
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) =>
          setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          })
        }
        onCreate={setMap}
      >
        <MapTypeControl position={"TOPRIGHT"} />
        <ZoomControl position={"RIGHT"} />
        {position && <MapMarker position={position} />}
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
        <MapMarker position={markerPosition} onClick={() => setIsOpen(true)} />
        {isOpen && (
          <CustomOverlayMap position={markerPosition}>
            <CustomOveray setIsOpen={setIsOpen} />
          </CustomOverlayMap>
        )}
      </Map>
      {position && (
        <p>
          {"클릭한 위치의 위도는 " +
            position.lat +
            " 이고, 경도는 " +
            position.lng +
            " 입니다"}
        </p>
      )}
    </>
  );
}

MapComponent.propTypes = {
  place: PropTypes.string.isRequired,
};
