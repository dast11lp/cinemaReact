import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const UniqueReserve = ({ currentItems }) => {

  // console.log(currentItems)

  return (
    <div className="unique-reserve">
      {currentItems &&
        currentItems.map((item, i) => (
          <div className="unique-reserve__content"key={i}>
            <h2 className="unique-reserve__content__item unique-reserve__content__item--title">Número de reservación: {item.id}</h2>
            <h3 className="unique-reserve__content__item unique-reserve__content__item--title">Usuario: <span>{item.myUser.username}</span></h3>
            <p className="unique-reserve__content__item unique-reserve__content__item--pg">Fecha de la reservación: {item.dateRes}</p>
            {/* <p className="unique-reserve__content__item unique-reserve__content__item--pg">número de sillas: {item.functionChairs[0].numberChair}</p> */}
            <p className="unique-reserve__content__item unique-reserve__content__item--pg">número de sillas: {item.functionChairs.map((el, i) => <span key={i}>{el.numberChair}, </span>)}</p>
            <p className="unique-reserve__content__item unique-reserve__content__item--pg">Fecha de la función: {item.functionMovie.function.date}</p>
            <p className="unique-reserve__content__item unique-reserve__content__item--pg">Hora de la función: {item.functionMovie.function.hourTime}</p>
            <p className="unique-reserve__content__item unique-reserve__content__item--pg">Sala: {item.functionMovie.function.room}</p>
          </div>
        ))}
    </div>
  );
};
