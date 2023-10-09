import { Input } from "../common/Input";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../features/Login/authSlice";

import { useForm } from "react-hook-form";
import { CheckBox } from "../common/CheckBox";

import { faEye, faKey, faUser} from '@fortawesome/free-solid-svg-icons'


import clipBoard from '../../../assets/img/clapperboard.png'
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.userLogin);
  const navigate = useNavigate()
  

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data, navigate));
  };

  const patternUsername = /[A-Za-z0-9]+/;
  const patternPassword = /[A-Za-z0-9]+/;

  return (
    <>
      <div className="form-box">

        <div className="form-box__info">
          <form onSubmit={handleSubmit(onSubmit)} className="form-box__info__form">
            <h2 className="heading-primary">Registrate en CinePop para continuar</h2>
            <Input name="username" type="text" placeholder={'username'} register={register} required={true} minLength={6} maxLength={20} pattern= {patternUsername} icon={faUser}/>
            <Input name="password" type="password" placeholder={'password'} register={register} required={true} minLength={6} maxLength={20} pattern= {patternPassword} icon={faKey} icon2={faEye}/>
            <CheckBox />
            <button type="submit">Enviar</button>
          </form>
        </div>
  
        <div className="form-box__brand">
          <img className="form-box__brand__clipBoard" src={clipBoard} alt="" />
        </div>
      </div>
    </>
    
  );
};
