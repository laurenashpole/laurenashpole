export function request (src, data, callback) {
  let request = new XMLHttpRequest();

  request.onload = function () {
    if (request.status === 200) {
      let response = JSON.parse(request.responseText);

      if (callback instanceof Function) {
        callback(response);
      }
    }
  };

  request.open('POST', src);

  if (data instanceof FormData) {
    request.send(data);
  } else {
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.send(JSON.stringify(data));
  }
}