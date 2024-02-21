
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
import FormRisultati from './RicercaForm/FormRisultati';
import CiotoleCane from './prodotti per il cane/CiotoleCane';
import CrocchettePerCane from './prodotti per il cane/CrocchettePerCane';
import CiboUmidoCane from './prodotti per il cane/CiboUmidoCane';
import GiochiCane from './prodotti per il cane/GiochiCane';
import CuccieCani from './prodotti per il cane/CuccieCani';









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
  const searchFunction = async (searchTerm) => {
    // Implementa la logica di ricerca qui, se necessario
  };

  return (

    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/tiragraffi' element={<Tiragraffi />}></Route>
        <Route path="/ciotolegatto" element={<GattoCiotole />} />
        <Route path="cuccieLettiniGatto" element={<CucciaGatto />} />
        <Route path='crocchetteGatto' element={<CrochetteGatto />} />
        <Route path='/guizagli' element={<Guinzaglio />} />
        <Route path='/ciotoleCane' element={<CiotoleCane />} />
        <Route path='/crocchetteCane' element={<CrocchettePerCane />} />
        <Route path='/ciboUmidoCane'   element={<CiboUmidoCane/>}/>
        <Route path='/giochiCane'element={<GiochiCane/>}/>
        <Route path='/CuccieCane' element={<CuccieCani/>}/>
        <Route path='/gabbie' element={<GabbiePerUccelli />} />
        <Route path='/carrello' element={<Carrello />} />
        <Route path='/ordine/:idOrdine' element={<Ordine />} />
        <Route path='/risultati-perNome' element={<FormRisultati />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
