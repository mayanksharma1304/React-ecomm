import { formatter } from "../../utils/Utils.js";
import "./AddToBagButton.css";
import { useCartContext } from "../../context/CartContext.jsx";

export default function AddToBagButton({ product, price }) {
  let productPrice = price || formatter.format(product.price * 95);
  let { addToCart } = useCartContext();
  return (
    <div className="product-add-to-bag">
      <button
        id={`addToBag_${product.id}`}
        name="addToBag"
        data-id={product.id}
        onClick={addToCart}
      >
        Add to Bag | {productPrice}
      </button>
    </div>
  );
}
