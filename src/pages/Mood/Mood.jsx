// Mood.jsx
import "./Mood.scss";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

// Define mood colors
const moodColors = {
  Energetic: "#FF5733", // Red
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
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(() => {
    const getRecentlyPlayed = async () => {
      try {
        const path = `${backendUrl}/recently-played`;
        const response = await axios.get(path, { withCredentials: true });
        setMood(response.data.mood);
        setRecentlyPlayed(response.data.tracks);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching recently played:', error);
      }
    };

    getRecentlyPlayed();
  }, []);

  const moodColor = moodColors[mood] || "#FFFFFF"; // Default to white if mood is not in the mapping

  return (
    <div className="mood">
      <Header />
      <div className="mood__container">
        <p className="mood__typed">Parinaz, I think your mood is ....</p>
        <span className="mood__type" style={{ color: moodColor }}>{mood}</span>
        {/* <div className="recently-played">
          {recentlyPlayed.map((track, index) => (
            <div key={index} className="track">
              <img src={track.album.images[0].url} alt={track.name} />
              <div>{track.name}</div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Mood;
