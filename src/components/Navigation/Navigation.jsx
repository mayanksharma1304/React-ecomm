import CATEGORIES from "../../data/categories.json";
import { useState } from "react";
import "./Navigation.css";

export default function Navigation() {
  const [selectedCat, setSelectedCat] = useState("");

  const handleMouseEnter = (event) => {
    setSelectedCat(event.currentTarget.id);
  };
  const handleMouseLeave = () => {
    setSelectedCat("");
  };

  return (
    <nav>
      <ul className="cat-nav">
        {CATEGORIES.map((rootCat) => {
          return (
            <li
              key={rootCat.id}
              name={rootCat.name}
              id={rootCat.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="primary-cat"
            >
              <span className="catName">{rootCat.name}</span>
              <ul hidden={selectedCat != rootCat.id} className="subcat-list">
                {rootCat.subcategories.map((subCat) => {
                  return (
                    <li key={subCat.id} name={subCat.name}>
                      <span className="catName">{subCat.name}</span>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
