import React from "react";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import FeatureShopCard from "/src/components/ui/feature-card/feature-shop-card";

export const AbstractFactory = {
  title: null,
  factoryTitle(props) {
    switch (props.owner) {
      case "Фермерские продукты":
        this.title = `${props.title} с фермы`;
        return this;
      case "Магазинные продукты":
        this.title = `${props.title} из магазина`;
        return this;
      default:
        this.title = `${props.title}`;
        return this;
    }
  },
  factoryCard(props) {
    switch (props.isNegative) {
      case false:
        return <FeatureCard {...props} title={this.title} />;
      default:
        return <FeatureShopCard {...props} title={this.title} />;
    }
  },
  create(type, props) {
    switch (type) {
      case "card":
        return this.factoryCard(props);
      case "title":
        return this.factoryTitle(props);
      default:
        return this;
    }
  },
};
