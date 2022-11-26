import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const user = false;
  return (
    <div className='top'>
        <div className='top-left'>
            <i className="top-left-icon facebook fa-brands fa-square-facebook"></i>
            <i className="top-left-icon twitter fa-brands fa-square-twitter"></i>
            <i className="top-left-icon instagram fa-brands fa-square-instagram"></i>
            <i className="top-left-icon pinterest fa-brands fa-square-pinterest"></i>
        </div>
        <div className='top-center'>
            <ul className='top-menu'>
                <li className='top-menu-items'>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li className='top-menu-items'>
                    <Link to='/about' className='link'>About</Link>
                </li>
                <li className='top-menu-items'>
                    <Link to='/contact' className='link'>Contact</Link>
                </li>
                <li className='top-menu-items'>
                    <Link to='/write' className='link'>Write</Link>
                </li>
                <li className='top-menu-items'>
                    <Link to='/logout' className='link'>{user && "LogOut"}</Link>
                </li>
            </ul>
        </div>
        <div className='top-right'>
            { user ? (<img className='top-img' src='../Images/dp.jpeg' alt='dpimage'></img>) 
                     : (<ul className='top-menu'>
                            <li className='top-menu-items'>
                                <Link to='/login' className='link'>LOGIN / </Link>
                                <Link to='/register' className='link'>REGISTER</Link>
                            </li>
                        </ul>
                     )
            }
            <i className="search-icon fa-solid fa-magnifying-glass top-right-icon"></i>
           
        </div>
    </div>
  )
}

export default Navbar
