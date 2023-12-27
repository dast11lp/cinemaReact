import React, { useEffect } from "react";
import { getFuncMovieMiddleware } from "../../../features/FunctionsPerMovie/FuntionsPerMovieSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FunctionItem } from "./FunctionItem";

export const FunctionsMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const listFuntions = useSelector((state) => state.listFunc.movieFunction);
  const functionPerDate = useSelector((state) => state.listFunc.functionPerDate);

  getFuncMovieMiddleware(id);

  useEffect(() => {
    dispatch(getFuncMovieMiddleware(id));
  }, []);

  return (
    <>
      <div className="function-page">
        <div className="function-page__movie-details">
          <h2 className="function-page__movie-details__title">
            {listFuntions.movieName}
          </h2>

          <img
            src={listFuntions.poster}
            alt=""
            className="function-page__movie-details__img"
          />

          <div className="function-page__movie-details__meta-data">
            <p className="function-page__movie-details__meta-data__language">
              {" "}
              <span className="title-strong">Idioma:</span>{" "}
              {listFuntions.language}
            </p>
            <p className="function-page__movie-details__meta-data__director">
              <span className="title-strong">director:</span>{" "}
              {listFuntions.director}
            </p>
            <p className="function-page__movie-details__meta-data__country">
              <span className="title-strong">País de origen:</span>{" "}
              {listFuntions.country}
            </p>
            <p className="function-page__movie-details__meta-data__protagonists">
              <span className="title-strong">Protagonistas:</span>{" "}
              {listFuntions.protagonists}
            </p>
          </div>

          <div className="function-page__movie-details__description">
            <h2 className="function-page__movie-details__description__title">
              Sinopsis
            </h2>
            <p className="">{listFuntions.descripction}</p>
          </div>
        </div>

        <div className="function-page__function-list">

          {Object.keys(functionPerDate).map((key,i)=>{
            return ( 
              <FunctionItem key={key} functionsMovie={functionPerDate[key]} functionsDate= {Object.keys(functionPerDate)[i]}/>
          )})}
        </div>
      </div>
    </>
  );
};
