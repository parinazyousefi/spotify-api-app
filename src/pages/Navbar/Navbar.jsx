import './Navbar.scss';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import songLogo from '../../assets/logos/icons8-song-48.png';
import artistLogo from '../../assets/logos/icons8-mic-48.png';
import moodLogo from '../../assets/logos/icons8-easy-listening-48.png';
const Navbar=()=>{
    return(
        <ul className="navbar__list">
      <Link to='/dashboard' className="navbar__item">
        <img src={moodLogo} alt='mood logo'></img>
        <li className="navbar__item">Mood</li>
      </Link>
      <Link to='/artists' className="navbar__item">
      <img src={artistLogo} alt='artist logo'></img>
        <li className="navbar__item">Top Artists</li>
      </Link>
      <Link to='/songs' className="navbar__item">
      <img src={songLogo} alt='song logo'></img>
        <li className="navbar__item">Top Songs</li>
      </Link>
      <Link to="/">
        <FaTimes className="icon" />
      </Link>
    </ul>

    )
}
export default Navbar;