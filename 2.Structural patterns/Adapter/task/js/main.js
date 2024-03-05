const ROOT_TABLE = document.getElementById("result");

const adapter = function (data, index) {
  return {
    id: data.id || data.Id || index + 1,
    state: data.state || data.State,
    counterparty: data.counterparty || data.Counterparty,
    manager: data.manager || data.Manager,
  };
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

getDataFromServer(`${window.location.origin}/data.json`, function (err, data) {
  data.map((elem, index) => {
    const adapterData = adapter(elem, index);
    console.log(adapterData);
    return (ROOT_TABLE.innerHTML += `
      <tr class="table__row table__row--blue">
          <td>
              <div class="checkbox">
                <input type="checkbox" name="checkbox-1" id="checkbox-1">
                <label for="checkbox-1"></label>
              </div>
          </td>
          <td>${adapterData.id}</td>
          <td>${adapterData.state}</td>
          <td>${adapterData.counterparty}</td>
          <td>${adapterData.manager}</td>
      </tr>`);
  });
});
