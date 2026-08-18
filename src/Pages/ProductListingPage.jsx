import { useParams } from "react-router-dom";
import PRODUCTS from "../data/products.json";
import CATEGORIES from "../data/categories.json";
import ProductTile from "../components/ProductTile/ProductTile";

export default function ProductListingPage() {
  let categoryId = useParams().id;
  let selectedCat = "";

  CATEGORIES.forEach((category) => {
    if (category.id == categoryId) {
      selectedCat = category;
    } else if (category.subcategories) {
      let result = category.subcategories.find((cat) => cat.id == categoryId);

      if (result) {
        selectedCat = result;
      }
    }
  });

  let productList = PRODUCTS.filter((product) => {
    let result = "";
    if (product.category.indexOf(selectedCat.id) > -1) {
      result = product;
    } else if (selectedCat.subcategories) {
      result = selectedCat.subcategories.find((cat) => {
        return product.category.indexOf(cat.id) > -1;
      });
    }
    return result;
  });

  return (
    <section>
      {productList.map((product) => {
        return <ProductTile product={product} key={product.id} />;
      })}
    </section>
  );
}
