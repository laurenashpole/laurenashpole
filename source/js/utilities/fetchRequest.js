import 'whatwg-fetch';

export function fetchRequest (method, body, endpoint, callback, omitHeaders = false) {
  let options = {
    credentials: 'include',
    method: method,
    body: body
  };

  if (!omitHeaders) {
    options = {...options, headers: new Headers({
      'Content-Type': 'application/json'
    })};
  }

  window.fetch(endpoint, options).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(response.statusText)
  }).then((response) => {
    callback(response);
  });
}