import 'whatwg-fetch';

export async function request ({ method, body, endpoint }) {
  const options = {
    credentials: 'include',
    method: method || 'POST',
    body: body
  };

  if (!(body instanceof FormData)) {
    options.headers = new Headers({
      'Content-Type': 'application/json'
    });
  }

  try {
    const response = await fetch(endpoint, options);
    const responseJSON = await response.json();

    if (response.ok) {
      return responseJSON;
    }

    throw new Error(response.statusText);
  } catch (err) {
    throw new Error(err);
  }
}