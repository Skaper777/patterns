const ROOT_TABLE = document.getElementById("result");

const decorator = function (getDataFromJSON) {
  if (localStorage.getItem("data")) {
    renderData(JSON.parse(localStorage.getItem("data")));
  } else {
    getDataFromJSON();
  }
};

const renderData = function (data) {
  data.map((elem) => {
    tResult.innerHTML += `
      <tr class="table__row table__row--blue">
          <td>
              <div class="checkbox">
                <input type="checkbox" name="checkbox-1" id="checkbox-1">
                <label for="checkbox-1"></label>
              </div>
          </td>
          <td>${elem.Id}</td>
          <td>${elem.state}</td>
          <td>${elem.counterparty}</td>
          <td>${elem.manager}</td>
      </tr>`;
  });
};

const getDataFromServer = function (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const status = xhr.status;
    if (status === 200) {
      callback(null, JSON.parse(xhr.response));
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

decorator(
  getDataFromServer(
    `${window.location.origin}/data.json`,
    function (err, data) {
      renderData(data);
      localStorage.setItem("data", data);
    }
  )
);
