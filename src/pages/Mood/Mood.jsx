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
  const [userName, setUserName] = useState('');
  const [mood, setMood] = useState('');
  const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState([]);
  const [recommendedTracks, setRecommendedTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user's profile
        const profileResponse = await axios.get(`${backendUrl}/profile`, { withCredentials: true });
        setUserName(profileResponse.data.display_name);

        // Fetch user's recently played tracks
        const recentlyPlayedResponse = await axios.get(`${backendUrl}/recently-played`, { withCredentials: true });
        const tracks = recentlyPlayedResponse.data.tracks;
        setRecentlyPlayedTracks(tracks);

        // Fetch recommendations based on the mood
        const recommendationsResponse = await axios.get(`${backendUrl}/recommendations`, { withCredentials: true });
        const recommended = recommendationsResponse.data;
        setMood(recommended.mood);
        setRecommendedTracks(recommended.tracks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const moodColor = moodColors[mood] || "#FFFFFF"; // Define moodColors object properly

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
          {/* Display recommended tracks */}
          <div className="section">
            <h2>Recommended Tracks</h2>
            {recommendedTracks.map((track) => (
              <div key={track.id} className="song" onClick={() => (window.location.href = track.external_urls.spotify)}>
                <img src={track.album.images?.[0]?.url} alt={track.name} className="songs__img" />
                <div className="recommendation__info">
                  <div className="recommendation__name">{track.name}</div>
                  <div className="recommendation__artist">{track.artists?.[0]?.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mood;
