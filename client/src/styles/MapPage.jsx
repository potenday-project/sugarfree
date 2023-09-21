import styled from "styled-components";

export const MenuDiv = styled.div`
  font-family: var(--nanum);
`;

export const InputStyle = styled.input`
  width: 250px;
  height: 42px;
  border-radius: 5px;
  position: absolute;
  left: 3%;
  z-index: 5;
`;

export const CurrentImg = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  z-index: 10;
  position: absolute;
  bottom: 1%;
  left: 0%;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const BottomBar = styled.div`
  position: absolute;
  bottom: 0%;
  z-index: 5;
  background-color: white;
  width: 100%;
  height: 251px;
  text-align: center;
`;

export const BottomBarClick = styled.p`
  cursor: pointer;
  color: red;
`;

export const BottomBarSpan1 = styled.span`
  margin-right: 4rem;
`;

export const BottomBarSpan2 = styled.span`
  margin-left: 4rem;
  cursor: pointer;
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9;
  position: absolute;
`;

export const ModalWrapper = styled.div`
  width: 257px;
  height: 223px;
  position: absolute;
  top: 20%;
  right: 39%;
  background-color: white;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 11px;
`;

export const ModalStandard = styled.p`
  margin-top: 2rem;
`;

export const ModalP = styled.p`
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    color: #2ab7c0;
  }
`;

export const ModalP2 = styled.p`
  text-align: right;
  width: 100%;
  margin-right: 1rem;
  cursor: pointer;
`;
