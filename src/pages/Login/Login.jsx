import "./Login.scss";
import { useState } from "react";
import axios from "axios";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Login = () => {
  const handleLogin = async () => {
    try {
      // Redirect the user to the Spotify authentication page with the backend URL as a query parameter
      window.location.href = `${backendUrl}/auth/spotify?redirect_uri=${encodeURIComponent(window.location.origin)}`;
    } catch (error) {
      console.error('Error initiating authentication:', error);
    }
  };

  return (
    <div className='login'>
      <h1 className='login__title'>What's your mood ?</h1>
      <button className='login__btn' onClick={handleLogin}>Connect to Spotify</button>
    </div>
  );
}

export default Login;
