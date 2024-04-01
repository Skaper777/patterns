const decorator = function (getDataFromJSON) {
  if (localStorage.getItem("data")) {
    console.log("Получаю данные из localStorage");
    renderData(JSON.parse(localStorage.getItem("data")));
  } else {
    console.log("Получаю данные из JSON");
    getDataFromJSON();
  }
};