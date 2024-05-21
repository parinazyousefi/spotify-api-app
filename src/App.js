import './App.scss';
import Login from './pages/Login/Login';
import Mood from './pages/Mood/Mood';
import Navbar from './pages/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Mood/>}/>
      <Route path='/navbar' element={<Navbar/>}></Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
