import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 5;
  background-color: #2ab7c0;
`;

const BlockImg = styled.img`
  margin: 1rem;
  display: block;
`;

const LogoP = styled.p`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 25.2px */
  letter-spacing: -0.18px;
`;

export default function LogoPage() {
  const [timer, setTimer] = useState(true);
  const [timer2, setTimer2] = useState(false);
  const [timer3, setTImer3] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setTimer(false), 2000);
    setTimeout(() => setTimer2(true), 2500);
    setTimeout(() => {
      setTImer3(false);
      navigate("/login");
    }, 5000);
  }, []);

  return (
    <>
      {timer3 ? (
        <LogoWrapper>
          {timer ? (
            <>
              <BlockImg src="/images/logo.png" />
              <BlockImg src="/images/logowrite.png" />
            </>
          ) : (
            <></>
          )}
          {timer2 ? (
            <>
              <LogoP>주변 카페의 모든 저당 메뉴를 한눈에, 슈가프리맵</LogoP>
            </>
          ) : (
            <></>
          )}
        </LogoWrapper>
      ) : (
        <></>
      )}
    </>
  );
}
