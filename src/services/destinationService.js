const baseUrl = "https://softuni-custom-server2.herokuapp.com/data";


// CRUD services
export async function getAll() {
  let res = await fetch(`${baseUrl}/destinations/?sortBy=_createdOn%20desc`);
  let data = await res.json();
  let result = Object.values(data);
  return result;
}



export async function getMy(userId) {
  let res = await fetch(`${baseUrl}/destinations/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
  let data = await res.json();
  let result = Object.values(data);
  return result;
}


export async function create(destinationData, token) {
  let res = await fetch(`${baseUrl}/destinations`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ ...destinationData, likes: [] }),
  });

  let data = await res.json();

  return data;
}

export async function getOne(destinationId) {
  let res = await fetch(`${baseUrl}/destinations/${destinationId}`);
  let data = await res.json();
  return data;
}

export function deleteDestination(destinationId, token) {
  return fetch(`${baseUrl}/destinations/${destinationId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
}
