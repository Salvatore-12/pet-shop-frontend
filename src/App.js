
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Homepage from './components/Home';
import MyNavbar from './components/MyNavbar';
import Tiragraffi from './components/Tiragraffi';
import { useEffect, useState } from 'react';
import Guinzaglio from './components/guinzaglio';
import GabbiePerUccelli from './prodotti per uccello/GabbiePerUccelli';
import GattoCiotole from './components/gattoCiotole';
import CucciaGatto from './components/CuccieGatto';
import CrochetteGatto from './components/CrocchetteGatto';
import Carrello from './carrello/Carrello';
import Ordine from './carrello/Ordine';




function App() {
  const [jwtToken, setJwtToken] = useState(null);



  useEffect(() => {
    const cachedToken = localStorage.getItem('jwtToken');
    if (cachedToken) {
      setJwtToken(cachedToken);
    }
  }, []);

  const updateTokenInCache = (newToken) => {
    localStorage.setItem('jwtToken', newToken);
    setJwtToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setJwtToken(null);
  };

  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/tiragraffi' element={<Tiragraffi />}></Route>
        <Route path="/ciotolegatto" element={<GattoCiotole/>}/>
        <Route path="cuccieLettiniGatto" element={<CucciaGatto/>} />
        <Route path='crocchetteGatto'  element={<CrochetteGatto/>}/>
        <Route path='/guizagli' element={<Guinzaglio />} />
        <Route path='/gabbie' element={<GabbiePerUccelli />} />
        <Route path='/carrello' element={<Carrello/>}/>
        <Route path='/ordine/:idOrdine' element={<Ordine/>}/>
        

      </Routes>
    </BrowserRouter>
  );
}
export default App;
