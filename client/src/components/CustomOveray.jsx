import PropTypes from "prop-types";
export default function CustomOveray({ setIsOpen }) {
  return (
    <>
      <div className="wrap">
        <div className="info">
          <div className="title">
            카카오 스페이스닷원
            <div
              className="close"
              onClick={() => setIsOpen(false)}
              title="닫기"
            >
              <p>X</p>
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
      </div>
    </>
  );
}

CustomOveray.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
