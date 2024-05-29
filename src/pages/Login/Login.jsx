import axios from 'axios';
import './Login.scss';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Login = () => {
  const handleLogin = () => {
    axios.get(`${backendUrl}/auth/spotify`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      window.location.href = response.data.redirectUrl; // Ensure your backend sends the correct redirect URL
    })
    .catch(error => {
      console.error('Error during Spotify login:', error);
    });
  };

  return (
    <div className='login'>
      <h1 className='login__title'>What's your mood?</h1>
      <button className='login__btn' onClick={handleLogin}>Connect to Spotify</button>
    </div>
  );
};

export default Login;
