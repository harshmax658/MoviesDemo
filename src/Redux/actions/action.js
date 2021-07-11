import axios from "axios";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const ADD_MOVIE_AS_FAVOURITE = "ADD_MOVIE_AS_FAVOURITE";
export const REMOVE_MOVIE_FROM_FAVOURITE = "REMOVE_MOVIE_FROM_FAVOURITE";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const CANCEL_MOVIE_DETAIL_PREVIEW = "CANCEL_MOVIE_DETAIL_PREVIEW";
export const SHOW_FAVOURITE = "SHOW_FAVOURITE";

export const handleFetchMovies = () => {
  let api = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=3`;
  return (dispatch) => {
    const CallApi = async () => {
      try {
        let fetchData = await axios(api);
        // console.log();
        dispatch(fetchMovies(fetchData.data.results));
      } catch (e) {
        console.log("error", e);
      }
    };
    CallApi();
  };
};
export const fetchMovies = (data) => {
  return {
    type: FETCH_MOVIES,
    data,
  };
};
export const addFavMovie = (data) => {
  return {
    type: ADD_MOVIE_AS_FAVOURITE,
    data,
  };
};
export const removeFromFav = (data) => {
  return {
    type: REMOVE_MOVIE_FROM_FAVOURITE,
    data,
  };
};
export const getMovieDetail = (data) => {
  let api = `
  https://api.themoviedb.org/3/movie/${data}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
  return (dispatch) => {
    const CallApi = async () => {
      try {
        let fetchData = await axios(api);

        dispatch(MovieDetail(fetchData.data));
      } catch (e) {
        console.log("error", e);
      }
    };
    CallApi();
  };
};
export const MovieDetail = (data) => {
  return {
    type: GET_MOVIE_DETAIL,
    data,
  };
};
export const cancelMoviePreview = (data) => {
  return {
    type: CANCEL_MOVIE_DETAIL_PREVIEW,
  };
};
export const showFavourite = (data) => {
  return {
    type: SHOW_FAVOURITE,
    data,
  };
};
