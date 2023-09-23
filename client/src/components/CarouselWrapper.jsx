import Carousel from "./Carousel";
import PropTypes from "prop-types";

export default function CarouselWrapper({ items }) {
  const OPTIONS = { align: "center", loop: true };
  return (
    <section className="sandbox__carousel">
      <Carousel slides={items} options={OPTIONS} />
    </section>
  );
}

CarouselWrapper.propTypes = {
  items: PropTypes.array.isRequired,
};
