export const AbstractFactory = {
  title: null,
  factoryTitle(props) {
    switch (props.type) {
      case "special":
        this.title = `Редкий ${props.name}`;
        return this;
      default:
        this.title = `${props.name}`;
        return this;
    }
  },
  factoryCard(props) {
    switch (props.type) {
      case "special":
        return <SpecialStarCard {...props} name={this.title} />;
      default:
        return <StarCard {...props} name={this.title} />;
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
  }
};

/**«Абстрактная фабрика» инкапсулирует внутри себя один или несколько «Фабричных методов», 
 * каждый из которых реализует свою фабрику. */