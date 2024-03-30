import './Header.scss'
import playlistCover from '../../assets/images/archee-lal-6geVJeZJMg8-unsplash.jpg'
const Header=()=>{
    return(
        <header className="header">
            <div className='header__container'>
            <div image-wrapper>
                <img className='playlistCover' src={playlistCover} alt='playlist cover'></img>
            </div>
            <div className='playlist-info'>
            <h1 className="header__title">USER PLAYLIST</h1>
            </div>
            </div>
        </header>

    )
}
export default Header;