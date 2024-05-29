import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Song.scss";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Song = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getTopSongs = async () => {
      try {
        const response = await axios.get(`${backendUrl}/top-songs`, {
          withCredentials: true,
        });
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching top songs:", error);
      }
    };

    getTopSongs();
  }, []);
  return (
    <div className="songs">
      <Header />
      <div className="holder">
        <div className="songs__title">
          <h1 className="title">Top Songs</h1>
        </div>
        <div className="songs__container">
          {songs.map((song) => (
            <div
              key={song.id}
              className="song"
              onClick={() =>
                (window.location.href = song.external_urls.spotify)
              }
            >
              <img
                src={song.album.images?.[0]?.url}
                alt={song.name}
                className="songs__img"
              />
              <div className="songs__info">
              <div className="songs__name">{song.name}</div>
              <div className="songs__artist">{song.artists?.[0]?.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Song;
