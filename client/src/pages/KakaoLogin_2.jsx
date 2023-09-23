import { useEffect, useState } from "react";

export default function KakaoLogin_2() {
    const REST_API_KEY = '백엔드';
    const REDIRECT_URI = '백엔드';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=e7542f591ad8f199dcc87122988f2885&redirect_uri=http://127.0.0.1:5173/auth&response_type=code`;
  
    const kakaoLogin = () => {
      window.location.href = link;
    };
    
  
    return (
        <div className="iphone-mini">
          <div className="div">
            <div>
            </div>
            <div className="text-wrapper">스타벅스 신촌점</div>
            <div className="text-wrapper-2">환영해요!</div>
            <div className="overlap">
              <div className="group">
                <div className="rectangle" />
              </div>
              <div className="text-wrapper-3" onClick={kakaoLogin}>
                카카오 로그인
              </div>
            </div>
            <div className="overlap-group">
              <img
                className="btng"
                alt="Btng"
                src="../../public/images/btng-2.png"
              />
            </div>
            <div className="text-wrapper-4">네이버 로그인</div>
          </div>
        </div>
      );
    }