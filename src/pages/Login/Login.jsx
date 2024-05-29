import "./Login.scss";
import { useEffect } from "react";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Login = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the Spotify authentication URL from the backend
        const response = await axios.get(`${backendUrl}/auth/spotify`);
        // Redirect the user to the Spotify authentication page
        window.location.href = response.data.authUrl;
      } catch (error) {
        console.error('Error fetching authentication URL:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='login'>
      <h1 className='login__title'>What's your mood ?</h1>
      {/* Displaying a loading message or spinner could be helpful here */}
      <p>Loading...</p>
    </div>
  );
}

export default Login;
