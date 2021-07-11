import React, { useState } from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addFavMovie, removeFromFav } from "../../Redux/actions/action";

const Card = ({ values, movieDetail }) => {
  const [fav, setFav] = useState(false);

  const FavHandle = () => {
    if (fav === false) {
      setFav(true);
    } else {
      setFav(false);
    }
  };
  const dispatch = useDispatch();
  const favMovieHandler = (data) => {
    dispatch(addFavMovie(data));
    FavHandle();
  };
  const removefromFav = (data) => {
    dispatch(removeFromFav(data));
    FavHandle();
  };
  const { poster_path, original_title, release_date } = values;

  return (
    <div className={`card ${fav ? "favCard" : ""} `}>
      <div className="Movie_Poster">
        <div className="poster" onClick={() => movieDetail(values)}>
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
            alt="Movie Poster"
          />
        </div>
      </div>

      <div className="details">
        <div>
          <p className="MovieTitle">{original_title}</p>
          <p className="date">{release_date}</p>
        </div>
        <div className="Fav">
          {fav ? (
            <MdFavorite
              onClick={() => {
                removefromFav(values);
              }}
              tooltip="r"
              style={{
                color: "red",
                backgroundColor: "#a9c4ff",
                borderRadius: "50%",
              }}
            />
          ) : (
            <MdFavoriteBorder
              onClick={() => {
                favMovieHandler(values);
              }}
              style={{
                color: "white",
                backgroundColor: "#a9c4ff",
                borderRadius: "50%",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
