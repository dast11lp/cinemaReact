import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesMiddleware } from "../../../features/ListingMovies/ListingMoviesSlice";
import { Card } from "./Card";
import { Link } from "react-router-dom";

export const ListingMovies = () => {
  const listMovies = useSelector((state) => state.listMovies.listingMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesMiddleware());
  }, []);

  return (
    <>
      {listMovies.map((movie) => (
        <Link to={`/funciones/${movie.id}`} key={movie.id} className="card__link">
          <Card
            title={movie.movieName}
            img={movie.poster}
            language={movie.language}
            description={movie.descripction}
            director={movie.director}
            protagonists={movie.protagonists}
            country={movie.country}
          />
        </Link>
      ))}
    </>
  );
};
