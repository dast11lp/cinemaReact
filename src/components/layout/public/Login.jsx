import { Input } from "../common/Input";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../features/Auth/authSlice";

import { useForm } from "react-hook-form";
import { CheckBox } from "../common/CheckBox";

import { faEye, faKey, faUser } from "@fortawesome/free-solid-svg-icons";

import clipBoard from "../../../assets/img/clapperboard.png";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const previousPage = useSelector((state) => state.previousPath.previousPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => dispatch(login(data, navigate, previousPage));

  const patternUsername = /[A-Za-z0-9]+/;
  const patternPassword = /[A-Za-z0-9]+/;


  return (
    <>
      <div className="form-box">
        <div className="form-box__info">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-box__info__form"
          >
            <h2 className="heading-primary">
              Registrate en CinePop para continuar
            </h2>
            <Input
              name="username"
              type="text"
              placeholder={"username"}
              register={register}
              required={"El campo es requerido"}
              minLength={{ value: 3, message: "Ingresar mínimo 3 caracteres" }}
              maxLength={{ value: 30, message: "Ingresar máximo 3 caracteres" }}
              pattern={patternUsername}
              icon={faUser}
            />
            {<span style={{color: 'red'}}>{errors?.username?.message}</span>}
            <Input
              name="password"
              type="password"
              placeholder={"password"}
              register={register}
              required={"El campo es requerido"}
              minLength={{ value: 3, message: "Ingresar mínimo 3 caracteres" }}
              maxLength={{ value: 30, message: "Ingresar máximo 3 caracteres" }}
              pattern={patternPassword}
              icon={faKey}
              icon2={faEye}
            />
            {<span style={{color: 'red'}}>{errors?.password?.message}</span>}
            {/* <CheckBox /> */}
            <button type="submit" className="button ">
              Iniciar Sesión
            </button>
          </form>
        </div>

        <div className="form-box__brand">
          <img className="form-box__brand__clipBoard" src={clipBoard} alt="" />
        </div>
      </div>
    </>
  );
};
