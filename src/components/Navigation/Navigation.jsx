import CATEGORIES from "../../data/categories.json";
import { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [hoveredCat, setHoveredCat] = useState("");

  const handleMouseEnter = (event) => {
    setHoveredCat(event.currentTarget.id);
  };
  const handleMouseLeave = () => {
    setHoveredCat("");
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
              onClick={handleMouseLeave}
              className="primary-cat"
            >
              <span className="catName">
                <Link to={`category/${rootCat.id}`}>{rootCat.name}</Link>
              </span>
              <ul hidden={hoveredCat != rootCat.id} className="subcat-list">
                {rootCat.subcategories.map((subCat) => {
                  return (
                    <li key={subCat.id} name={subCat.name}>
                      <span className="catName">
                        <Link to={`category/${subCat.id}`}>{subCat.name}</Link>
                      </span>
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
