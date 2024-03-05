class Singleton {
  constructor() {
    if (typeof Singleton.instance === 'object') {
      return Singleton.instance
    }

    Singleton.instance = this
    return Singleton.instance
  }

  PAGES = {
    "Главная": 0,
    "Покупка билетов": 0
  }

  getSingleton() {
    return this.PAGES
  }

  incSingleton(page) {
    this.PAGES[page]++
  }
}