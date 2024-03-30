import './Playlist.scss';
import image from '../../assets/images/archee-lal-6geVJeZJMg8-unsplash.jpg';
const Playlist=()=>{
    return(
        <div className="playlist">
            <div className='item-holder'>
            <div className='playlist__item'>
                <div className='cover-wrapper'>
                    <img className='cover' src={image} alt='songs cover'>
                    </img>
                </div>
                <div className='song-info'>
                    <h4 className='song-name'>amour plastique</h4>
                    <h4 className='artist'>Video Club</h4>
                </div>
            </div>
            </div>

        </div>
    )
}
export default Playlist;