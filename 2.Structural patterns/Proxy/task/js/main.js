const TABLE_RESULT = document.getElementById("result");

class Security {
  validate(func) {
    const nowTime = new Date().getHours();
    if (nowTime >= 4 && nowTime <= 23) return func;
    else return alert("Данные временно не доступны");
  }
}

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

const getJSONSecurity = new Security().validate(getDataFromServer);

getJSONSecurity(`${window.location.origin}/data.json`, function (err, data) {
  data.map((elem) => {
    return (TABLE_RESULT.innerHTML += `
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
      </tr>`);
  });
});
