import {
  FETCH_MOVIES,
  ADD_MOVIE_AS_FAVOURITE,
  REMOVE_MOVIE_FROM_FAVOURITE,
  SHOW_FAVOURITE,
} from "../actions/action";
const inititalState = {
  movies: [],
  favouriteMovieList: [],
  isFav: false,
};

const MoviesData = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_MOVIES: {
      return { ...state, movies: action.data };
    }
    case ADD_MOVIE_AS_FAVOURITE: {
      return {
        ...state,
        favouriteMovieList: [...state.favouriteMovieList, action.data],
      };
    }
    case REMOVE_MOVIE_FROM_FAVOURITE: {
      let newfavList = state.favouriteMovieList.filter((val) => {
        return val !== action.data;
      });

      return {
        ...state,
        favouriteMovieList: newfavList,
      };
    }
    case SHOW_FAVOURITE: {
      return {
        ...state,
        isFav: action.data,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export { MoviesData };
