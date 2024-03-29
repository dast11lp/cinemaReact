import { Navbar } from './Navbar'
import { HeaderContent } from './HeaderContent'
import { useLocation } from 'react-router-dom';


export const Header = () => {
  const location = useLocation();
  return (
    <header className={`header ${location.pathname == "/common"? "header--viewport" : ""}`}>
        <div className='header__nav'>
          <Navbar />
        </div>
        {location.pathname == "/common" ? <HeaderContent />: ""}
    </header>
  )
}
