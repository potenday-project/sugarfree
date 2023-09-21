import PropTypes from "prop-types";
import styled from "styled-components";

const ModalDiv = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperDiv = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const ButtonDiv = styled.div`
  cursor: pointer;
  color: red;
`;

export default function CustomOveray({ setIsOpen }) {
  return (
    <ModalDiv>
      <WrapperDiv className="wrap">
        <div className="info">
          <div className="title">
            스타벅스 슬렉점
            <div
              className="close"
              onClick={() => setIsOpen(false)}
              title="닫기"
            >
              <ButtonDiv>X</ButtonDiv>
            </div>
          </div>
          <div className="body">
            <div className="img">
              <img
                src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2170353A51B82DE005"
                width="73"
                height="70"
                alt="카카오 스페이스닷원"
              />
            </div>
            <div className="desc">
              <div className="ellipsis">제주특별자치도 제주시 첨단로 242</div>
              <div className="jibun ellipsis">
                (우) 63309 (지번) 영평동 2181
              </div>
              <div>
                <a
                  href="https://www.kakaocorp.com/main"
                  target="_blank"
                  className="link"
                  rel="noreferrer"
                >
                  홈페이지
                </a>
              </div>
            </div>
          </div>
        </div>
      </WrapperDiv>
    </ModalDiv>
  );
}

CustomOveray.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
