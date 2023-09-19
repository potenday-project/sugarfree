import Map from "../components/Map";
import Rating from "@mui/material/Rating";

export default function MapPage() {
  return (
    <>
      <Map />
      <div>스타벅스 슬렉점</div>
      <Rating name="read-only" defaultValue={2.5} precision={0.5} readOnly />
      <p>저당은 무슨 고당입니다~ </p>
    </>
  );
}
