import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueReservationMiddleware } from "../../../features/UniqueReserve/uniqueReserveSlice";
import { useParams } from "react-router-dom";

export const UniqueReserve = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userLogin?.userData?.idUser);
  const listReservationIds = useSelector(
    (state) => state.reservation.reservation
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUniqueReservationMiddleware(userId, id));
  }, [id]);

  useEffect(() => {
    console.log(listReservationIds);
  }, [listReservationIds]);

  if (false) {
    return <>loading...</>;
  } else {
    return (
      <div>
        <p>idReservacion: {listReservationIds?.id}</p>
        <p>Usuario: {listReservationIds?.myUser?.username}</p>
        <p>Pelicula: {listReservationIds?.functionMovie?.movie?.movieName}</p>
        <p>Sala: {listReservationIds?.functionMovie?.function?.room ? listReservationIds?.functionMovie?.function?.room : "NAN"}</p>
        <p>Fecha: {listReservationIds?.functionMovie?.function?.date}</p>
        <p>
          sillas: {listReservationIds?.functionChairs?.map((el, i) => (<span key={i}>{el?.numberChair}, </span>))}
        </p>
        <p>Precio: </p>
      </div>
    );
  }
};
