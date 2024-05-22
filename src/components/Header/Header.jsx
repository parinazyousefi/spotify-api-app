import './Header.scss';
import logo from '../../assets/logos/logo1.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import songLogo from '../../assets/logos/icons8-song-48.png';
import artistLogo from '../../assets/logos/icons8-mic-48.png';
import moodLogo from '../../assets/logos/icons8-easy-listening-48.png';
const Header=()=>{
    return(
        <header className="header">
            <div className="header--mobile">
        <Link to="/" className="header__title">
          <img src={logo} alt="spotify logo"></img>
        </Link>
        <Link to="/navbar">
          <FaBars className="icon" />
        </Link>
      </div>
      <div className="header--desktop">
        <Link to="/" className="header__title">
        <img src={logo} alt="spotify logo"></img>
        </Link>
        <ul className="header__list">
          <Link to ='/dashboard' className="nav-link">
          <img src={moodLogo} alt='mood logo'></img>
          <li className="header__item">Mood</li>
          </Link>
          <Link to='/artists' className='nav-link'> 
          <img src={artistLogo} alt='artist logo'></img>
          <li className="header__item">Top Artisits</li>
          </Link>
          <Link to='/songs' className='nav-link'> 
          <img src={songLogo} alt='song logo'></img>
          <li className="header__item">Top Songs</li>
          </Link>
        </ul>
      </div>
        </header>

    )
}
export default Header;