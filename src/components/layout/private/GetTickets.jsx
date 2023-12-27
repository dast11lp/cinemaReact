import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSeat, clearDesiredSeats, functionFetchMiddleware, subtractSeat } from "../../../features/Function_/funtionSlice";
import { Link, useLocation, useParams } from "react-router-dom";

export const GetTickets = () => {

  const dispatch = useDispatch();
  const seatsSelected = useSelector((state) => state.function_.desiredSeats);

  const [isDisabled, setIsDisabled] = useState(true)

  const { id } = useParams();

  useEffect(() => {
    dispatch(functionFetchMiddleware(id));
  }, []);

  useEffect(()=> {
    if(seatsSelected > 0) setIsDisabled(false)
    else setIsDisabled(true)
  },[seatsSelected])

  return (
    <div className="how-many">
      <h2>¿Cuantas boletas deseas?</h2>
      <div className="how-many__content">
        <div className="remove" onClick={() => dispatch(subtractSeat())}>
          <FontAwesomeIcon icon={faCircleMinus} />
        </div>
        <span>{seatsSelected}</span>
        <div className="add" onClick={() => dispatch(addSeat())}>
          <FontAwesomeIcon icon={faCirclePlus} />
        </div>
      </div>
      <div className="how-many__button-section">
        <Link to={isDisabled ? '#' : `/funcion/${id}/seats/${id}`} className={`button ${isDisabled ? 'button--disabled' : '' }`}>Siguiente</Link>
      </div>
    </div>
  );
};
