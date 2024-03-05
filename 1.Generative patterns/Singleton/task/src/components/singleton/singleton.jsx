class Singleton {
  PAGES = {
    MainPage: 0,
    BuyPage: 0,
  };

  constructor() {
    if (typeof Singleton.instance === "object") {
      return Singleton.instance;
    }
    Singleton.instance = this;
    return Singleton.instance;
  }

  getSingleton() {
    console.log(this.PAGES);
    return this.PAGES;
  }

  incSingleton(page) {
    this.PAGES[page]++;
  }
}

export default Singleton;
