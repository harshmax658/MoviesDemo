import { combineReducers } from "redux";
import { MoviesData } from "./MoviesData";
import MovieDetail from "./MovieDetail";

const rootReducer = combineReducers({
  MoviesData,
  MovieDetail,
});

export default rootReducer;
