import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-item'>
            <span className='sidebar-title'>ABOUT ME </span>
            <img src='./Images/3.jpeg' alt='my image'></img>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus debitis blanditiis voluptatum non est optio.</p>
        </div>
        <div className='sidebar-item'>
            <span className='sidebar-title'>CATEGORIES</span>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>Life</li>
                <li className='sidebar-list-item'>Music</li>
                <li className='sidebar-list-item'>Sports</li>
                <li className='sidebar-list-item'>Tech</li>
                <li className='sidebar-list-item'>Style</li>
                <li className='sidebar-list-item'>Fashion</li>
            </ul>
        </div>
        <div className='sidebar-item'>
            <span className='sidebar-title'>CATEGORIES</span>
            <div className='sidebar-social'>
                <i className="sidebar-icon facebook fa-brands fa-square-facebook"></i>
                <i className="sidebar-icon twitter fa-brands fa-square-twitter"></i>
                <i className="sidebar-icon instagram fa-brands fa-square-instagram"></i>
                <i className="sidebar-icon pinterest fa-brands fa-square-pinterest"></i>
            </div>
        </div>
  
    </div>
  )
}

export default Sidebar
