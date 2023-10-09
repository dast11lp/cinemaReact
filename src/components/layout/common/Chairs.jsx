import { faChair } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const Chairs = ({ functionMovie }) => {
  const listFuntions = useSelector((state) => state.listFunc.movieFunction);

  const chairs = listFuntions?.functionMovie?.[0]?.function?.functionChairs;

  useEffect(() => {}, []);
  return (
    <div className="chairs">
      {chairs?.map((el, i) => (
        <div className="chairs__chair" key={i}>
          <FontAwesomeIcon icon={faChair} className="chairs__chair__icon"/>
        </div>
      ))}
    </div>
  );
};
