const Ajax = {
  setting(type, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.onload = function () {
      const status = xhr.status;
      if (status === 200) {
        callback(null, JSON.parse(xhr.response));
      } else {
        callback(status, xhr.response);
      }
    };
    return xhr;
  }
};

/* Мы убрали все подробности о XMLHttpRequest, который используем для запроса к серверу,
 а все настройки этого механизма вынесли в параметры функции. */