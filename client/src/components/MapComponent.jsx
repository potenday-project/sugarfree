import PropTypes from "prop-types";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import useKakaoLoader from "../hooks/useKakaoLoader";
import { useEffect, useState } from "react";
import CustomOveray from "./CustomOveray";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
};

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoldSpan = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const FontP = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SmallP = styled.div`
  font-size: 14px;
  color: #8a8a8a;
`;

export const Img = styled.img`
  width: 71px;
  height: 66px;
  margin-bottom: 25px;
`;

export const SmallP1 = styled.p`
  font-size: 14px;
  color: #8a8a8a;
  margin-top: 10px;
`;

export const ButtonFlex = styled.div`
  display: flex;
`;

export const Cancel = styled.div`
  margin-top: 29px;
  background-color: #d6d6d6;
  color: white;
  width: 150px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const Confirm = styled.div`
  border-radius: 10px;
  margin-left: 7px;
  margin-top: 29px;
  background-color: #2ab7c0;
  color: white;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  cursor: pointer;
`;

export default function MapComponent({ place, current }) {
  const [markers, setMarkers] = useState([]);
  const [kakaoMarkers, setKakaoMarkers] = useState([]);
  const [isModal, SetisModal] = useState(false);
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

  const handleClose = () => {
    SetisModal(false);
  };

  const onClick = () => {
    handleClose();
  };

  useEffect(() => {
    setState({
      center: {
        lat: 33.450701,
        lng: 126.570667,
      },
      isPanto: false,
    });

    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state === "granted") {
          SetisModal(false);
        } else if (result.state === "prompt") {
          SetisModal(true);
          // 사용자에게 권한 부여 여부를 묻는 창이 나타날 것임
        } else if (result.state === "denied") {
          SetisModal(true);
          alert("위치 기반 추천 기능이 비활성화되었습니다.");
          // 사용자가 이전에 거부했거나, 브라우저 설정으로 인해 자동 거부됨
          console.log("error");
        }
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
            errMsg: "위치기반 서비스 불가",
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

  const asyncFunction = async () => {
    const data = await axios.get("/dummy/dummy.json");
    setMarkers(data.data);
  };

  useEffect(() => {
    if (!map) return;
    asyncFunction();

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
      <div>
        {isModal ? (
          <Modal
            open={isModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <FlexDiv>
                <Img src="/images/logo_invert.svg" />
                <FontP>
                  <p>
                    <BoldSpan>’슈가프리맵’</BoldSpan>이(가) 사용자의
                  </p>
                  <p>위치 정보에 접근하려고 합니다.</p>
                  <SmallP1>사용자의 위치와 가까운 음료와</SmallP1>
                  <SmallP>카페 정보를 검색하고 추천합니다</SmallP>
                </FontP>
              </FlexDiv>
              <ButtonFlex>
                <Cancel onClick={onClick}>취소</Cancel>
                <Confirm onClick={onClick}>확인</Confirm>
              </ButtonFlex>
            </Box>
          </Modal>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

MapComponent.propTypes = {
  place: PropTypes.string.isRequired,
  current: PropTypes.bool.isRequired,
  isSearch: PropTypes.bool.isRequired,
};
