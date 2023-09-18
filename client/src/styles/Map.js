import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const MapContainer = styled.div`
  width: 800px;
  height: 800px;
  position: relative;
`;

export const ZoomInButton = styled.button`
  width: 100px;
  height: 20px;
  position: absolute;
  top: 15%;
  z-index: 5;
`;

export const ZoomOutButton = styled.button`
  width: 100px;
  height: 20px;
  position: absolute;
  top: 10%;
  z-index: 5;
`;

export const ChangeViewButton = styled.button`
  width: 100px;
  height: 20px;
  position: absolute;
  top: 5%;
  z-index: 5;
`;

export const ButtonAndInput = styled.div`
  display: flex;
`;

export const ChangeViewButton2 = styled.button`
  width: 100px;
  height: 20px;
  position: absolute;
  top: 0%;
  z-index: 5;
`;
