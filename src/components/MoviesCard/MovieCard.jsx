import React from "react";
import Card from "./Card";
import "./MoviesCard.css";
import { useDispatch } from "react-redux";
import { getMovieDetail } from "../../Redux/actions/action";

const MovieCard = ({ movies, isFav }) => {
  const dispatch = useDispatch();
  const movieDetail = (data) => {
    dispatch(getMovieDetail(data.id));
  };
  return (
    <>
      <h2 id="heading">{isFav ? "Favourites Movies" : "Popular Movies"}</h2>
      <hr />
      <section className="MoviesCard">
        {movies.length > 0
          ? movies.map((values) => (
              <Card key={values.id} values={values} movieDetail={movieDetail} />
            ))
          : "No movies to display!!"}
      </section>
    </>
  );
};

export default MovieCard;
