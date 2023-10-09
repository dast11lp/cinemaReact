import { Navbar } from './Navbar'
import { HeaderContent } from './HeaderContent'
import { useLocation } from 'react-router-dom';

export const Header = () => {

  const url = useLocation();

  return (
    <div className='header'>
        <Navbar />
        {
          url.pathname == '/' && <HeaderContent />
        }
    </div>
  )
}
