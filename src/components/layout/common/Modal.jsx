import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../../features/Modal/modalSlice";
import { Link } from "react-router-dom";

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
          <button className="button button--reject" onClick={closeModal}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};
