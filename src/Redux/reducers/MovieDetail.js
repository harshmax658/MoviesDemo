import {
  GET_MOVIE_DETAIL,
  CANCEL_MOVIE_DETAIL_PREVIEW,
} from "../actions/action";

let movie = {
  movieData: {},
  isMovieData: false,
};

const MovieDetail = (state = movie, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAIL: {
      return { ...state, movieData: action.data, isMovieData: true };
    }
    case CANCEL_MOVIE_DETAIL_PREVIEW: {
      return {
        ...state,
        isMovieData: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default MovieDetail;
