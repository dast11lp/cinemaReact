import {Config} from "./config";

export const loginFetch = async (user) => {
  try {
    const request = await fetch(`${Config.hostname}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const ListingMoviesFetch = async () => {
  try {
    const request = await fetch(`${Config.hostname}movies/list`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const listFuncMovieFetch = async (id) => {
  try {
    const request = await fetch(`${Config.hostname}function-movie/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const functionFetch = async (id) => {
  try {
    const request = await fetch(`${Config.hostname}functions/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await request.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};