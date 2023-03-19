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



export async function update(destinationData, token,destinationId) {
  let res = await fetch(`${baseUrl}/destinations/${destinationId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ ...destinationData }),
  });

  let data = await res.json();

  return data;
}


export async function likeAPost(postId, token) {
  const res = await fetch(`${baseUrl}/likes`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ postId }),
  });

  let jsonResult = await res.json();
  if (res.ok) {
    return jsonResult;
  } else {
    throw jsonResult.message;
  }
}

export async function totalLikesOfAPost(postId) {
  const res = await fetch(
    `${baseUrl}/likes?where=postId%3D%22${postId}%22&distinct=_ownerId&count`
  );

  let jsonResult = await res.json();

  return jsonResult;
}



export async function hasTheUserAlreadyLiked(postId, userId) {
  const res = await fetch(
    `${baseUrl}/likes?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`
  );

  let jsonResult = await res.json();

  return jsonResult;
}

