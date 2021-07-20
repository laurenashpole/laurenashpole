import 'whatwg-fetch';

export async function request ({ method, body, endpoint }) {
  const options = {
    credentials: 'include',
    method: method || 'POST',
    body: body
  };

  if (body && !(body instanceof FormData)) {
    options.headers = new Headers({
      'Content-Type': 'application/json'
    });
  }

  try {
    const response = await fetch(endpoint, options);

    if (response.ok) {
      return await response.json();
    }

    throw new Error(response.statusText);
  } catch (err) {
    throw new Error(err);
  }
}