import './Login.scss';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const Login=()=>{
    const handleLogin=()=>{
        window.location.href = `${backendUrl}/auth/spotify`;
    }
    return(
        <div className='login'>
            <h1 className='login__title'>What's your mood ?</h1>
            <button className='login__btn' onClick={handleLogin}>Connect to Spotify</button>
        </div>
    )
}

export default Login;