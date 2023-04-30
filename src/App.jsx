
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Registration from './pages/singUp/Registration';
import SectionOne from './pages/home/leftSection/SectionOne';

function App() {
  return (
    <BrowserRouter>
    <SectionOne/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Registration/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
