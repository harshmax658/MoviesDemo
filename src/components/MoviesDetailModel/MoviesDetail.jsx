import React from "react";
import "./MoviesDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { cancelMoviePreview } from "../../Redux/actions/action";

const MoviesDetail = () => {
  const state = useSelector((state) => state.MovieDetail);
  const dispatch = useDispatch();
  const {
    backdrop_path,
    poster_path,
    original_title,
    overview,
    tagline,
    vote_count,
    genres,
    runtime,
  } = state.movieData;
  const homePage = () => {
    dispatch(cancelMoviePreview());
  };
  return (
    <>
      <section className="movieDetails">
        <section
          className="backGround"
          style={{
            backgroundImage: `url(
                  https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${backdrop_path}
                  ) `,
          }}
        ></section>
        <div className="close">
          <h2>
            <button onClick={homePage}>Close</button>
          </h2>
        </div>
        <div className="dataContainer">
          <div className="logo">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
              alt=""
            />
          </div>
          <div className="detailsView">
            <h2 className="title">{original_title}</h2>
            <div className="votes">
              <div id="userVote">
                <p className="vote">{`Vote Count:${vote_count}`}</p>
              </div>
              <p> Duration : {runtime}m</p>

              <div id="genere">
                Genres:
                {genres.map((data) => (
                  <p key={data.name + 21}>{`${data.name}|`}</p>
                ))}
              </div>
            </div>
            <p className="tagline">{tagline}</p>
            <div className="overView">
              <h3>OverView</h3>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoviesDetail;
