export const BuilderPages = {
  page: "",
  promoText: "",
  setPromo: (text) => {
    BuilderPages.promoText = text;
    return BuilderPages;
  },
  renderForm: (callback) => {
    return <>{callback(BuilderPages.promoText)}</>;
  }
};

/**«Строитель» разбивает создание компонента на этапы. Он делает проект гибче, так как мы можем использовать на странице разные блоки и функциональные модули. 
 *  В примере из демо видно, что при определённых обстоятельствах мы можем не выводить акцию или не рендерить форму.
 *  Для этого достаточно исключить нужный этап. */