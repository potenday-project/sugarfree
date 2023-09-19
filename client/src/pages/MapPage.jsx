import { useRef, useState } from "react";
import MapComponent from "../components/MapComponent";
import Rating from "@mui/material/Rating";

export default function MapPage() {
  const inputRef = useRef(null);
  const [inputContent, SetInputContent] = useState(" ");

  const onKeyUpHandler = (e) => {
    if (e.key === "Enter") {
      SetInputContent(inputRef.current.value);
    }
  };

  return (
    <>
      <input ref={inputRef} onKeyUp={onKeyUpHandler} />
      <MapComponent place={inputContent} />
      <div>
        <p>스타벅스 슬렉점</p>
        <Rating name="read-only" defaultValue={2.5} precision={0.5} readOnly />
        <p>저당은 무슨 고당입니다~ 2.5점 드립니다. </p>
      </div>
    </>
  );
}
