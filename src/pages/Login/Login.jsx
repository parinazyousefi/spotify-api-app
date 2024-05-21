import './Login.scss';
import axios from 'axios';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

console.log(backendUrl);
const Login=()=>{
    const handleLogin=()=>{
        window.location.href = `${backendUrl}/auth/spotify`;
        console.log('check authenticated');
    }
    return(
        <div className='login'>
            <h1 className='login__title'>What's your mood ?</h1>
            <button className='login__btn' onClick={handleLogin}>Connect to Spotify</button>
        </div>
    )
}

export default Login;