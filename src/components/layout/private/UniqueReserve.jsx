import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const UniqueReserve = ({ currentItems }) => {

  // console.log(currentItems)

  return (
    <div style={{height: '120px'}}>
      {currentItems &&
        currentItems.map((item, i) => (
          <div key={i}>
            <h3>Usuario: {item.myUser.username}</h3>
            <p>Número de reservación{item.id}</p>
            <p>Fecha de la reservación: {item.dateRes}</p>
            <p>número de sillas: {item.functionChairs[0].numberChair}</p>
            <p>Fecha de la función: {item.functionMovie.function.date}</p>
            <p>Hora de la función: {item.functionMovie.function.hourTime}</p>
            <p>Sala: {item.functionMovie.function.room}</p>
          </div>
        ))}
    </div>
  );
};
