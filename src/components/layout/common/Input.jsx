
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Input = ({name, type,placeholder, register, required, minLength, maxLength, pattern, icon, icon2}) => {


  const handleViewPassword = ({target}) => {
    const passwordInput = document.querySelector("input[name='password']");
    const type = passwordInput.getAttribute("type")

    

    if(type === "text") {
      passwordInput.setAttribute("type","password")
      target.style.color = "black"

    }else if (type === "password") {
      passwordInput.setAttribute("type", "text")
      target.style.color = "blue"
    }
  }

  return (
    <div className='input'>
        <label name={name} htmlFor="" ></label>
        {/* {
          pattern == undefined || pattern =="" ?
          <input className='input' {...register(name, {required, minLength, maxLength, pattern})} type={type} placeholder={placeholder}/> :
          <input className='input' {...register(name, {required, minLength, maxLength})} type={type} placeholder={placeholder}/>
        } */}
        <FontAwesomeIcon icon={icon} className='icon-awesome'/>
        <input className='input__field' {...register(name, {required, minLength, maxLength, pattern})} type={type} placeholder={placeholder} />
        {
          icon2 && <FontAwesomeIcon icon={icon2} className='icon-awesome2' onClick={handleViewPassword}/>
        }
    </div>
  )
}
