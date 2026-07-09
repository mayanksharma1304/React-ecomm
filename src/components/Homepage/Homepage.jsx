import "./Homepage.css";
import PRODUCTS from "../../data/products.json";
import ProductTile from "../ProductTile/ProductTile";

export default function Homepage() {
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
      <section className="bestseller-carousel-wrapper">
        <div className="bestseller-heading">
          <h2>BEST SELLERS</h2>
        </div>
        <div className="bestseller-carousel">
          {PRODUCTS.filter((product) => {
            return product.isBestseller == true;
          }).map((prod) => {
            return <ProductTile product={prod} key={prod.id} />;
          })}
        </div>
      </section>
    </div>
  );
}
