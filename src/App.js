import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./components/MoviesCard/MovieCard";
import NavBar from "./components/NavBar/NavBar";
import { handleFetchMovies, showFavourite } from "./Redux/actions/action";
import MoviesDetail from "./components/MoviesDetailModel/MoviesDetail";

const App = () => {
  const state = useSelector((state) => state.MoviesData);
  const { movies, favouriteMovieList, isFav } = state;
  const [movi, setmovies] = useState(movies);
  const [fav, setFav] = useState(true);
  const moviesDetail = useSelector((state) => state.MovieDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFetchMovies());
  }, [dispatch]);

  useEffect(() => {
    isFav ? setmovies(favouriteMovieList) : setmovies(movies);
    setTimeout(() => {
      setFav(false);
    }, 500);
  }, [isFav, movies, favouriteMovieList, dispatch]);

  const setMovieHandler = (data) => {
    dispatch(showFavourite(data));
  };

  return (
    <>
      <NavBar setMovieHandler={setMovieHandler} />
      {fav ? (
        "Loading Data"
      ) : moviesDetail.isMovieData ? (
        <MoviesDetail />
      ) : (
        <MovieCard movies={movi} fav={fav} isFav={isFav} />
      )}
    </>
  );
};

export default App;
