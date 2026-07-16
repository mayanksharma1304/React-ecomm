import "./ProductTile.css";
import { formatter } from "../../utils/Utils.js";

export default function ProductTile({ product }) {
  let productPrice = formatter.format(product.price * 95);
  return (
    <div className="product-tile">
      <div className="productimg">
        <img src={product.image} alt="product image" draggable={false} />
      </div>
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <div className="product-og">
          <span className="product-occasion">{product.occasion}</span>
          <span className="product-gender">{product.gender}</span>
        </div>
        <div className="product-rr-info">
          <span className="product-rating">{product.rating}</span>
        </div>
      </div>
      <div className="product-add-to-bag">
        <button
          id={`addToBag_${product.id}`}
          name="addToBag"
          data-id={product.id}
        >
          Add to Bag | {productPrice}
        </button>
      </div>
    </div>
  );
}
