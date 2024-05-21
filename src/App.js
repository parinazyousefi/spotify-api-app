import './App.scss';
import Header from './components/Header/Header';
import Playlist from './components/Playlist/Playlist';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
        {/* <Route path='/' element={<Profile/>}/> */}
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
