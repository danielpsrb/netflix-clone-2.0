const API_KEY = process.env.NEXT_PUBLIC_API_KEY
// const BASE_URL = "https://api.themoviedb.org/3";

// const API_KEY = process.env.API_KEY;
// console.log("API_KEY:", API_KEY);

export const getTrendingMedias = async (type) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/trending/${type}/day?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    return data && data.results;
  } catch (err) {
    console.log(err);
  }
};

export const getTopratedMedias = async (type) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${type}/top_rated?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (err) {
    console.log(err);
  }
};

export const getPopularMedias = async (type) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${type}/popular?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (err) {
    console.log(err);
  }
};

export const getTVorMoviesByGenre = async (type, id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/discover/${type}?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=${id}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data && data.results;
  } catch (err) {
    console.log(err);
  }
};

export const getTVorMovieVideosByID = async (type, id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${type}/${id}/videos?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getTVorMovieSearchResults = async (type, query) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/search/${type}?api_key=${API_KEY}&include_adult=false&language=en-US&query=${query}`,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    return data && data.results;
  } catch (err) {
    console.log(err);
  }
};

export const getTVorMovieDetailsByID = async (type, id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
      {
        method: "GET",
      }
    );

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getSimilarTVorMovies = async (type, id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}&language=en-US`,
      {
        method: "GET",
      }
    );

    const data = await res.json();
    return data && data.results;
  } catch (err) {
    console.log(err);
  }
};

export const getAllfavorites = async (uid, accountID) => {
  try {
    const res = await fetch(
      `/api/favorites/get-all-favorites?id=${uid}&accountID=${accountID}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data && data.data;
  } catch (err) {
    console.log(err);
  }
};
