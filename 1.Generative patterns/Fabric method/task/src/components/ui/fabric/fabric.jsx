import React from "react";
import FarmCard from "../feature-cards/farm-card";
import ShopCard from "../feature-cards/shop-card";

const PRODUCTS_NAMES = ["Магазинные продукты", "Фермерские продукты"];

function FactoryProductCard(props) {
  switch (props.owner) {
    case PRODUCTS_NAMES[0]:
      return <ShopCard {...props} />;
    default:
      return <FarmCard {...props} />;
  }
}

export default FactoryProductCard;
