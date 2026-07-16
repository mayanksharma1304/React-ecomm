import { MoveLeft, MoveRight } from "lucide-react";
import ProductTile from "../ProductTile/ProductTile";
import { useState, useRef } from "react";
import "./Carousel.css";

export default function Carousel({ heading, products, ref }) {
  const scrollLeft = () => {
    ref.current.scrollBy({ left: -50, behavior: "smooth" });
  };

  const scrollRight = () => {
    ref.current.scrollBy({ left: 50, behavior: "smooth" });
  };

  //isScrolling: it flips the cursor, so it needs to trigger a re-render
  const [isDragging, setIsDragging] = useState(false);

  // startX : Mouse's starting X position
  const startX = useRef(0);

  //scrollStart : Carousel's scroll left at the moment
  const scrollStart = useRef(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);

    //e.pageX is the mouse's horizontal position on the page at that exact moment.
    startX.current = event.pageX;

    // built-in DOM property every scrollable element has, holding how far it's currently scrolled.
    scrollStart.current = ref.current.scrollLeft;
  };

  //  fires continuously as the mouse moves, but only matters while dragging:
  const handleMouseMove = (event) => {
    if (!isDragging) return;

    // he distance moved since mouse-down — current position minus where you started.
    const walked = event.pageX - startX.current;

    //scroll position gets set directly: original scroll position, adjusted by how far the mouse has traveled
    ref.current.scrollLeft = scrollStart.current - walked;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleOnMouseLeave = () => setIsDragging(false);

  return (
    <section className="carousel-wrapper">
      <div className="carousel-heading">
        <h2>{heading}</h2>
      </div>
      <div className="carousel-track-wrapper">
        <div id="carousel-arrows">
          <button id="left-button" onClick={scrollLeft}>
            <MoveLeft className="carousel-icon" />
          </button>
          <button id="right-button" onClick={scrollRight}>
            <MoveRight className="carousel-icon" />
          </button>
        </div>
        <div
          className={`top-carousel ${isDragging ? "dragging" : ""}`}
          ref={ref}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleOnMouseLeave}
        >
          {products.map((prod) => {
            return <ProductTile product={prod} key={prod.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
