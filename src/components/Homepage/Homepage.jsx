import Carousel from "../Carousel/Carousel";
import "./Homepage.css";
import { useRef } from "react";
import PRODUCTS from "../../data/products.json";

export default function Homepage() {
  let bestsellerRef = useRef(null);
  let spotLightRef = useRef(null);

  return (
    <div className="homediv">
      <section className="heroimage">
        <img src="./hero-image.jpg" alt="Hero image" />
      </section>
      <section className="brand-quote">
        <p>
          The House of ABC is an authentic perfume house dedicated to the
          creation of highly original, artisan fragrances, made from the finest
          ingredients the world has to offer.
        </p>
      </section>
      <Carousel
        products={PRODUCTS.filter((product) => {
          return product.isBestseller == true;
        })}
        heading="BEST SELLERS"
        ref={bestsellerRef}
      />
      <Carousel
        products={PRODUCTS.filter((product) => {
          return product.collection === "signature";
        }).slice(0, 6)}
        heading="SPOTLIGHT"
        ref={spotLightRef}
      />
    </div>
  );
}
