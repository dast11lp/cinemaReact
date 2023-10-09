import Config from "./config";

export const loginFetch = async (user) => {
  const request = await fetch(`${Config.hostname}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await request.json();
  return data;
};

export const LitingMoviesFetch = async () => {
  const request = await fetch(`${Config.hostname}movies/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await request.json();
  return data;
};

export const listFuncMovieFetch = async (id) => {
    const request = await fetch(`${Config.hostname}function-movie/${id}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await request.json()
    return data
}