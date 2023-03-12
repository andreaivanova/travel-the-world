const baseUrl = "https://softuni-custom-server2.herokuapp.com";

export async function login(email, password) {
  const res = await fetch(`${baseUrl}/users/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  let jsonResult = await res.json();
  if (res.ok) {
    return jsonResult;
  } else {
    throw jsonResult.message;
  }
}

export async function register(email, password, nameSurname) {
  const res = await fetch(`${baseUrl}/users/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password, nameSurname }),
  });

  let jsonResult = await res.json();
  if (res.ok) {
    return jsonResult;
  } else {
    throw jsonResult.message;
  }
}

export function logout(token) {
  return fetch(`${baseUrl}/users/logout`, {
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
  });
}

export function getUser() {
  let username = localStorage.getItem("username");

  return username;
}

export function isAuthenticated() {
  return Boolean(getUser());
}
