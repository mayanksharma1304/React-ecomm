import { useParams } from "react-router-dom";
import PRODUCTS from "../../data/products.json";
import { formatter } from "../../utils/Utils.js";
import "./ProductDetailsPage.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Rating,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddToBagButton from "../../components/AddToBagButton/AddToBagButton.jsx";
import { useState } from "react";

export default function ProductDetailsPge() {
  var productId = useParams().id;
  const [expanded, setExpanded] = useState("description");

  var product = PRODUCTS.find((prod) => prod.id == productId);
  let productPrice = product ? formatter.format(product.price * 95) : 0;

  const handleAccordionOnChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {" "}
      {product ? (
        <div id="pdp-overview">
          <div id="pdp-image">
            <img src={product.image} alt="product image" draggable={false} />
          </div>
          <div id="pdp-info">
            <div id="pdp-info__Product-name">{product.name}</div>
            <div id="pdp-info__Product-id">{product.id}</div>
            <div id="pdp-info__Product-rating">
              <Rating value={product.rating} precision={0.5} readOnly />
              <span id="pdp-info__Product-rating_val">{product.rating}</span>
            </div>
            <div id="pdp-info__Product-price">{productPrice}</div>
            <div id="pdp-info__accordion">
              <Accordion
                defaultExpanded
                expanded={expanded == "description"}
                onChange={handleAccordionOnChange("description")}
              >
                <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                  <Typography>Description</Typography>
                </AccordionSummary>

                <AccordionDetails>{product.description}</AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded == "notes"}
                onChange={handleAccordionOnChange("notes")}
              >
                <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                  <Typography>Notes</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <div className="pdp-info__accordion__notes">
                    <span className="pdp-info__accordion__notes_heading">
                      Top
                    </span>
                    <div className="pdp-info__accordion__notes_value">
                      {product.notes.top.map((topNote) => (
                        <li key={`top-${topNote}`}>{topNote}</li>
                      ))}
                    </div>
                    <span className="pdp-info__accordion__notes_heading">
                      Middle
                    </span>
                    <div className="pdp-info__accordion__notes_value">
                      {product.notes.middle.map((middleNote) => (
                        <li key={`middle-${middleNote}`}>{middleNote}</li>
                      ))}
                    </div>
                    <span className="pdp-info__accordion__notes_heading">
                      Base
                    </span>
                    <div className="pdp-info__accordion__notes_value">
                      {product.notes.base.map((baseNote) => (
                        <li key={`base-${baseNote}`}>{baseNote}</li>
                      ))}
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded == "additionalInfo"}
                onChange={handleAccordionOnChange("additionalInfo")}
              >
                <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                  <Typography>Additional Info</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <div className="pdp-info__accordion_add-details">
                    <div className="pdp-info__accordion_add-detail">
                      <span className="pdp-info__accordion_add-detail_label">
                        Type
                      </span>
                      <span className="pdp-info__accordion_add-detail_value">
                        {product.type}
                      </span>
                    </div>
                    <div className="pdp-info__accordion_add-detail">
                      <span className="pdp-info__accordion_add-detail_label">
                        House
                      </span>
                      <span className="pdp-info__accordion_add-detail_value">
                        {product.house}
                      </span>
                    </div>
                    <div className="pdp-info__accordion_add-detail">
                      <span className="pdp-info__accordion_add-detail_label">
                        Gender
                      </span>
                      <span className="pdp-info__accordion_add-detail_value">
                        {product.gender}
                      </span>
                    </div>
                    <div className="pdp-info__accordion_add-detail">
                      <span className="pdp-info__accordion_add-detail_label">
                        Occasion
                      </span>
                      <span className="pdp-info__accordion_add-detail_value">
                        {product.occasion}
                      </span>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <AddToBagButton product={product} />
          </div>
        </div>
      ) : (
        <div> No Product is found with this ID</div>
      )}
    </>
  );
}
