import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../features/Modal/modalSlice";
import { Link } from "react-router-dom";
import { removeIdSeats, setIdSeats } from "../../../features/Function_/funtionSlice";

export const Modal = () => {
  const dispatch = useDispatch();
  const modalSlice = useSelector((state) => state.modal.modalData);

  const closeModal = () => {
    dispatch(
      setModal({
        type: undefined,
        title: undefined,
        message: undefined,
        open: false, 
      })
    );
  };

  const selectSeat = () => {
    dispatch(setIdSeats(modalSlice.others.idSeat))
    closeModal()
  }

  const removeSeat = () => {
    console.log("¿me ejecuto?");
    dispatch(removeIdSeats(modalSlice.others.idSeat))
    closeModal()
  }

  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__box__close-button" onClick={closeModal}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
        <div className="modal__box__content">
          <h2>{modalSlice.title} </h2>
          <p>{modalSlice.message}</p>
        </div>
        <div className="modal__button-section">
          {modalSlice.type == "info" ? <Link className="button">Aceptar</Link>: '' }
          {modalSlice.type == "reserve" ? <button className="button" onClick={selectSeat}>Aceptar</button>: '' }
          {modalSlice.type == "remove" ? <button className="button" onClick={removeSeat}>Remover</button>: '' }
          <button className="button button--reject" onClick={closeModal}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};
