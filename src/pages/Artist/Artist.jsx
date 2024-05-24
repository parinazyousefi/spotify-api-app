import Header from "../../components/Header/Header";
import "./Artist.scss";
import axios from "axios";
import { useEffect, useState } from "react";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Artist = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getTopArtists = async () => {
      try {
        const response = await axios.get(`${backendUrl}/top-artists`, {
          withCredentials: true,
        });
        setArtists(response.data);
      } catch (error) {
        console.error("Error fetching top artists:", error);
      }
    };

    getTopArtists();
  }, []);
  return (
    <div className="artists">
      <Header />
      <div>
      <div className="artists__title">
        <h1 className="title">Top Artists</h1>
      </div>
      <div className="artists__container">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="artist"
            onClick={() =>
              (window.location.href = artist.external_urls.spotify)
            }
          >
            <img src={artist.images[0]?.url} alt={artist.name} className="artists__img" />
            <div className="artists__name">{artist.name}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
export default Artist;
