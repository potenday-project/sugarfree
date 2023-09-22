import PropTypes from "prop-types";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import useKakaoLoader from "../hooks/useKakaoLoader";
import { useEffect, useState } from "react";
import CustomOveray from "./CustomOveray";
import axios from "axios";

export default function MapComponent({ place, current }) {
  const [markers, setMarkers] = useState([]);
  const [kakaoMarkers, setKakaoMarkers] = useState([]);
  const [map, setMap] = useState();
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  const [selected, setSelected] = useState(-1);

  useKakaoLoader();

  useEffect(() => {
    setState({
      center: {
        lat: 33.450701,
        lng: 126.570667,
      },
      isPanto: false,
    });

    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, [current]);

  const asyncFunction = async (place) => {
    const data = await axios.get("/dummy/dummy.json");
    place === ""
      ? setMarkers(data.data)
      : setMarkers(
          data.data.filter((el) => {
            return el.content.indexOf(place) !== -1;
          })
        );
  };

  useEffect(() => {
    if (!map) return;
    asyncFunction(place);

    const ps = new kakao.maps.services.Places();

    const defaultPlace = place || "카페";

    ps.keywordSearch(defaultPlace, (data, status, _pagination) => {
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
        setKakaoMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map, place]);

  return (
    <>
      <Map // 지도를 표시할 Container
        id="map"
        isPanto={true}
        center={state.center}
        style={{
          // 지도의 크기
          width: "375px",
          height: "812px",
        }}
        level={3} // 지도의 확대 레벨
        onCreate={setMap}
      >
        {markers.map((marker, index) => (
          <div
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          >
            <CustomOverlayMap position={marker.position}>
              <CustomOveray
                count={marker.count}
                kakao={false}
                index={index}
                selected={selected}
                setSelected={setSelected}
                marker={marker}
              />
            </CustomOverlayMap>
          </div>
        ))}
        {kakaoMarkers.map((marker, index) => {
          return (
            <div
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            >
              <CustomOverlayMap position={marker.position}>
                <CustomOveray
                  count={0}
                  kakao={true}
                  index={index + markers.length}
                  selected={selected}
                  setSelected={setSelected}
                  marker={marker}
                />
              </CustomOverlayMap>
            </div>
          );
        })}
        {!state.isLoading && (
          <MapMarker position={state.center}>
            <div style={{ padding: "5px", color: "#000" }}>
              {state.errMsg ? state.errMsg : "현 위치"}
            </div>
          </MapMarker>
        )}
      </Map>
    </>
  );
}

MapComponent.propTypes = {
  place: PropTypes.string.isRequired,
  current: PropTypes.bool.isRequired,
};
