export function request (src, data, callback) {
  let request = new XMLHttpRequest();
  data = data || {};

  request.onload = function () {
    if (request.status === 200) {
      let response = JSON.parse(request.responseText);

      if (callback instanceof Function) {
        callback(response);
      }
    }
  };

  request.open('POST', src);
  // request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  request.setRequestHeader('Content-Type', 'multipart/form-data');
  request.send(JSON.stringify(data));
}