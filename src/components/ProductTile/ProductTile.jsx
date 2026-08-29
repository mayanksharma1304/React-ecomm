import "./ProductTile.css";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import AddToBagButton from "../AddToBagButton/AddToBagButton";

export default function ProductTile({ product }) {
  return (
    <div className="product-tile">
      <Link to={`/product/${product.id}`}>
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
            <span className="product-rating">
              <Rating value={product.rating} precision={0.5} readOnly />
            </span>
          </div>
        </div>
      </Link>
      <AddToBagButton product={product} />
    </div>
  );
}
