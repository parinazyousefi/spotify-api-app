import "./Mood.scss";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

// Define mood colors
const moodColors = {
  Energetic: "#f23405", // Red
  Happy: "#FFC300",     // Yellow
  Excited: "#DAF7A6",   // Light Green
  Content: "#C70039",   // Deep Red
  Relaxed: "#900C3F",   // Maroon
  Calm: "#581845",      // Purple
  Sad: "#1C1C1C",       // Dark Gray
  Bored: "#808080",     // Gray
  Tense: "#FF0000",     // Bright Red
  Neutral: "#FFFFFF",   // White
};

const Mood = () => {
  const [mood, setMood] = useState('');
  const [userName, setUserName] = useState('');
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileResponse, recentlyPlayedResponse, recommendationsResponse] = await Promise.all([
          axios.get(`${backendUrl}profile`, { withCredentials: true }),
          axios.get(`${backendUrl}recently-played`, { withCredentials: true }),
          axios.get(`${backendUrl}recommendations`, { withCredentials: true }),
        ]);

        setUserName(profileResponse.data.display_name);
        setMood(recentlyPlayedResponse.data.mood);
        setSongs(recommendationsResponse.data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

 
  

  const moodColor = moodColors[mood] || "#FFFFFF"; // Default to white if mood is not in the mapping

  return (
    <div className="recommendation" style={{ backgroundImage: `linear-gradient(to right, #231F20 0%, ${moodColor} 97%)` }}>
      <Header />
      <div className="holder">
        <div className="recommendation__title">
          <h1 className="title">Recommended Songs</h1>
          <div className="mood__container">
            <p className="mood__typed">{userName}, you seem </p>
            <span className="mood__type" style={{ color: moodColor }}>{mood}</span>
          </div>
        </div>
        <div className="recommendation__container">
          {songs.map((song) => (
            <div
              key={song.id}
              className="song"
              onClick={() =>
                (window.location.href = song.external_urls.spotify)
              }
            >
              <img src={song.album.images?.[0]?.url} alt={song.name} className="songs__img" />
              <div className="recommendation__info">
                <div className="recommendation__name">{song.name}</div>
                <div className="recommendation__artist">{song.artists?.[0]?.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mood;
